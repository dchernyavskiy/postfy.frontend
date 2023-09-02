import {Component, Input} from '@angular/core';
import {FileParameter, NetworkApiClient} from "../../../api/network-api";
import {BehaviorSubject, map, mergeMap, switchMap,} from "rxjs";
import {fi} from "date-fns/locale";

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
  isDragging: boolean = false;

  constructor(private readonly networkApiClient: NetworkApiClient) {
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
    const files = Array.from(this.medias).map((file) => {
      return {data: file, fileName: file.name} as FileParameter
    })
    this.networkApiClient.createPost(
      this.caption,
      files
    ).subscribe((response) => {
      this.isHidden$.next(true)
    })
  }

  log = (data: string) => {
    console.log(data)
  }

  drop($event: DragEvent) {
    $event.preventDefault()
    this.isDragging = false;
    this.processFiles($event.dataTransfer?.files!)
    console.log(this.previews.length > 0 && !this.isDragging)
  }

  dragover($event: DragEvent) {
    $event.preventDefault()
    this.isDragging = true;
  }

  isDragEntering: number = -2;

  dragleave($event: DragEvent) {
    $event.preventDefault()
    this.isDragging = --this.isDragEntering > 0;
    console.log(this.isDragEntering)
    this.isDragging =false;
  }

  dragenter($event: DragEvent) {
    $event.preventDefault()
    this.isDragEntering++;
    this.isDragging = true;
  }
}
