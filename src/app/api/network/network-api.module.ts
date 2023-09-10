/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UsersService } from './services/users.service';
import { ChatsService } from './services/chats.service';
import { CommentsService } from './services/comments.service';
import { MessagesService } from './services/messages.service';
import { PostsService } from './services/posts.service';
import { ReactionsService } from './services/reactions.service';
import { MediasService } from './services/medias.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UsersService,
    ChatsService,
    CommentsService,
    MessagesService,
    PostsService,
    ReactionsService,
    MediasService,
    ApiConfiguration
  ],
})
export class NetworkApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<NetworkApiModule> {
    return {
      ngModule: NetworkApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: NetworkApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('NetworkApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
