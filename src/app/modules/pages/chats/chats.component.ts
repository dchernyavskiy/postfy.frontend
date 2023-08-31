import {AfterViewChecked, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {ChatBriefDto, ChatDto, CreateMessage, MessageBriefDto, NetworkApiClient} from "../../../api/network-api";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";
import {HubConnection, HubConnectionBuilder} from "@microsoft/signalr";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnDestroy, AfterViewChecked {
  @ViewChild('messages') private messages: ElementRef = new ElementRef<any>('messages');
  isSideBarHidden: boolean = true;
  chats: ChatBriefDto[] = [];
  chat: ChatDto | undefined;
  createMessage: CreateMessage = {};
  private hubConnection: HubConnection = new HubConnectionBuilder()
    .withUrl('http://localhost:3000/signalr/v1/network/chat')
    .build();

  constructor(private readonly networkApiClient: NetworkApiClient,
              private readonly authService: AuthService,
              private readonly route: ActivatedRoute) {
    route.params.subscribe(res => {
      const id = res['id']
      this.createMessage.chatId = id;
      if (id) {
        this.networkApiClient.getChat(id).subscribe(res => {
          this.chat = res.chat
          this.hubConnection.start().then(
            _ => {
              this.hubConnection.invoke("JoinToChat", this.chat?.id!).then(data => {
              })
              this.hubConnection.on("ReceiveMessage", (data: MessageBriefDto) => {
                this.chat?.messages?.push(data)
              })
            }
          )
        })
      }
    })

    this.networkApiClient.getChats({}).subscribe(res => {
      this.chats = res.chat!
    })
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    this.hubConnection.stop().then(_ => {
    })

  }

  scrollToBottom() {
    try {
      this.messages.nativeElement.scrollTop = this.messages.nativeElement.scrollHeight;
    } catch (e) {

    }
  }

  sendMessage() {

    this.networkApiClient.createMessage(this.createMessage).subscribe(res => {
      this.createMessage.text = '';
      this.hubConnection.send('SendMessageAsync', this.chat?.id, res.message)
      this.chat?.messages?.push({
        id: res.message?.id,
        text: res.message?.text,
        isWrittenByYou: true,
        post: undefined,
        isPost: false,
        user: undefined,
        parent: undefined
      })
      this.scrollToBottom();
    })
  }
}
