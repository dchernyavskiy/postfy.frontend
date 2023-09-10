import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ModalWindowService} from "../../../core/services/modal-window.service";
import {PostsService} from "../../../api/network/services/posts.service";

@Component({
  selector: 'app-create-post-modal-window',
  templateUrl: './create-post-modal-window.component.html',
  styleUrls: ['./create-post-modal-window.component.scss']
})
export class CreatePostModalWindowComponent {
  caption = '';
  medias: File[] = [];
  previews: (string | ArrayBuffer | null)[] = [];
  @Input() isHidden$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isDragging: boolean = false;

  constructor(private readonly postsService: PostsService,
              protected readonly modalWindowService: ModalWindowService) {

  }

  processFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.medias.push(files[i]);
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        this.previews.push(result);
      }
      reader.readAsDataURL(files[i]);
    }
  }

  fileSelected($event: any) {
    this.processFiles($event.target.files);
  }

  uploadFiles() {
    this.postsService.createPost(
      {
        body: {
          Caption: this.caption,
          Files: this.medias
        }
      },
    ).subscribe((response) => {
      this.isHidden$.next(true)
    })
  }

  drop($event: DragEvent) {
    $event.preventDefault()
    this.isDragging = false;
    this.processFiles($event.dataTransfer?.files!)
  }

  dragover($event: DragEvent) {
    $event.preventDefault()
    this.isDragging = true;
  }

  isDragEntering: number = -2;

  dragleave($event: DragEvent) {
    $event.preventDefault()
    this.isDragging = --this.isDragEntering > 0;
    this.isDragging = false;
  }

  dragenter($event: DragEvent) {
    $event.preventDefault()
    this.isDragEntering++;
    this.isDragging = true;
  }
}
