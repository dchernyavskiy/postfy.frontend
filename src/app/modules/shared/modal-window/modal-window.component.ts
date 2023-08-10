import {Component, Input} from '@angular/core';
import {CreatePost, FileParameter, NetworkApiClient} from "../../../api/network-api";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  createPost: CreatePost = {}
  medias: File[] = [];
  previews: (string | ArrayBuffer | null)[] = [];
  @Input() isHidden$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private readonly networkApiClient: NetworkApiClient) {
  }

  fileSelected($event: any) {
    this.medias = $event.target.files;
    for (const file of $event.target.files) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        this.previews.push(result);
      }
      reader.readAsDataURL(file);
    }
  }

  uploadFiles() {
    const files = Array.from(this.medias).map((file) => {
      return {data: file, fileName: file.name} as FileParameter
    })
    this.networkApiClient.uploadMedia(
      files
    ).subscribe(res => {
      this.isHidden$.next(true)
      this.createPost.medias = res.medias
      console.log(this.createPost)
      this.networkApiClient.createPost(this.createPost).subscribe(res => {
        console.log(res)
      })
    })
  }
}
