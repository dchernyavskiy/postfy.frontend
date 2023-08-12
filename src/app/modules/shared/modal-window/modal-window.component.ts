import {Component, Input} from '@angular/core';
import {FileParameter, NetworkApiClient} from "../../../api/network-api";
import {BehaviorSubject, map, mergeMap, switchMap,} from "rxjs";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  caption = '';
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
    // this.networkApiClient.createPost({caption: 'fdsfasdf'}).subscribe(res => {
    //   console.log(res)})
    this.networkApiClient.createPost(
      this.caption,
      files
    ).subscribe((response) => {
      console.log(response)
    })
    // this.networkApiClient
    //   .uploadMedia(files)
    //   .pipe(mergeMap(res => {
    //     this.isHidden$.next(true)
    //     this.createPost.medias = res.medias
    //     return this.networkApiClient.createPost(this.createPost)
    //   })).subscribe(res => {
    //   console.log(res)
    // })
  }
}
