import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'imagePlaceholder'
})
export class ImagePlaceholderPipe implements PipeTransform {
  transform(sourceUrl: string | null | undefined, ...placeholderUrls: unknown[]): unknown {
    if (sourceUrl)
      return sourceUrl;
    else if (placeholderUrls.length > 0)
      return placeholderUrls[0];
    else
      return "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010";
  }
}
