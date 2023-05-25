import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlashMessagesModule} from "flash-messages-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { FormsModule } from "@angular/forms";
import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { QuillModule } from "ngx-quill";
import { PostComponent } from './post/post.component';
import { SortingPipe } from './sorting.pipe';
import { MalumotiUmumiComponent } from './malumoti-umumi/malumoti-umumi.component';
import { TarikhComponent } from './tarikh/tarikh.component';
import { TajhizotComponent } from './tajhizot/tajhizot.component';
import { TamosComponent } from './tamos/tamos.component';
import { MavqeijoygirshaviComponent } from './mavqeijoygirshavi/mavqeijoygirshavi.component'
import { authInterceptorProviders } from "./auth-interceptor.service";
import { EditPostComponent } from './edit-post/edit-post.component';
import { UsersPostsComponent } from './users-posts/users-posts.component';
import { AddPostMerosiAdabiComponent } from './add-post-merosi-adabi/add-post-merosi-adabi.component';
import { AddPostJashnuMarosimComponent } from './add-post-jashnu-marosim/add-post-jashnu-marosim.component';
import { AddPostLiboshoiMilliComponent } from './add-post-liboshoi-milli/add-post-liboshoi-milli.component';
import { AddPostAsbobhoiMusiqiComponent } from './add-post-asbobhoi-musiqi/add-post-asbobhoi-musiqi.component';
import { AddPostTaomhoiSunnatiComponent } from './add-post-taomhoi-sunnati/add-post-taomhoi-sunnati.component';
import { EditPostMerosiAdabiComponent } from './edit-post-merosi-adabi/edit-post-merosi-adabi.component';
import { HayotyFaoliyatComponent } from './hayoty-faoliyat/hayoty-faoliyat.component';
import { EditPostJashnuMarosimComponent } from './edit-post-jashnu-marosim/edit-post-jashnu-marosim.component';
import { EditPostLiboshoComponent } from './edit-post-libosho/edit-post-libosho.component';
import { MerosiAdabiComponent } from './merosi-adabi/merosi-adabi.component';
import { EditPostAsbobhoiMusiqiComponent } from './edit-post-asbobhoi-musiqi/edit-post-asbobhoi-musiqi.component';
import { EditPostTaomhoComponent } from './edit-post-taomho/edit-post-taomho.component'

//
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuthComponent,
    RegComponent,
    CabinetComponent,
    PostComponent,
    SortingPipe,
    MalumotiUmumiComponent,
    TarikhComponent,
    TajhizotComponent,
    TamosComponent,
    MavqeijoygirshaviComponent,
    EditPostComponent,
    UsersPostsComponent,
    AddPostMerosiAdabiComponent,
    AddPostJashnuMarosimComponent,
    AddPostLiboshoiMilliComponent,
    AddPostAsbobhoiMusiqiComponent,
    AddPostTaomhoiSunnatiComponent,
    EditPostMerosiAdabiComponent,
    HayotyFaoliyatComponent,
    EditPostJashnuMarosimComponent,
    EditPostLiboshoComponent,
    MerosiAdabiComponent,
    EditPostAsbobhoiMusiqiComponent,
    EditPostTaomhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    QuillModule.forRoot(),
  ],
  providers: [
    AuthService,
    JwtHelperService,
    authInterceptorProviders
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
