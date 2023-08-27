import {Component} from '@angular/core';
import {ChatBriefDto, ChatDto, CreateMessage, NetworkApiClient} from "../../../api/network-api";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent {
  isSideBarHidden: boolean = true;
  chats: ChatBriefDto[] = [];
  chat: ChatDto | undefined;
  createMessage: CreateMessage = {};

  constructor(private readonly networkApiClient: NetworkApiClient,
              private readonly authService: AuthService,
              private readonly route: ActivatedRoute) {
    route.params.subscribe(res => {
      const id = res['id']
      this.createMessage.chatId = id;
      if (id) {
        this.networkApiClient.getChat(id).subscribe(res => {
          this.chat = res.chat
        })
      }
    })

    this.networkApiClient.getChats({}).subscribe(res => {
      console.log(res)
      this.chats = res.chat!
    })
  }

  sendMessage() {
    this.networkApiClient.createMessage(this.createMessage).subscribe(res => {
      console.log(res)
      this.createMessage.text = '';
      this.chat?.messages?.push({
        id: res.message?.id,
        text: res.message?.text,
        isWrittenByYou: true,
        post: undefined,
        isPost: false,
        user: undefined,
        parent: undefined
      })
    })
  }
}
