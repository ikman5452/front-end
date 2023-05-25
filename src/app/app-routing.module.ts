import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RegComponent } from "./reg/reg.component";
import { AuthComponent } from "./auth/auth.component";
import { PostComponent } from "./post/post.component";
import { CabinetComponent } from "./cabinet/cabinet.component";
import { AuthGuard } from "./auth.guard";
import { MalumotiUmumiComponent } from "./malumoti-umumi/malumoti-umumi.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {UsersPostsComponent} from "./users-posts/users-posts.component";
import {AddPostMerosiAdabiComponent} from "./add-post-merosi-adabi/add-post-merosi-adabi.component";
import {AddPostJashnuMarosimComponent} from "./add-post-jashnu-marosim/add-post-jashnu-marosim.component";
import {AddPostLiboshoiMilliComponent} from "./add-post-liboshoi-milli/add-post-liboshoi-milli.component";
import {AddPostAsbobhoiMusiqiComponent} from "./add-post-asbobhoi-musiqi/add-post-asbobhoi-musiqi.component";
import {AddPostTaomhoiSunnatiComponent} from "./add-post-taomhoi-sunnati/add-post-taomhoi-sunnati.component";
import {TarikhComponent} from "./tarikh/tarikh.component";
import {TajhizotComponent} from "./tajhizot/tajhizot.component";
import {TamosComponent} from "./tamos/tamos.component";
import {MavqeijoygirshaviComponent} from "./mavqeijoygirshavi/mavqeijoygirshavi.component";
import {EditPostMerosiAdabiComponent} from "./edit-post-merosi-adabi/edit-post-merosi-adabi.component";
import {HayotyFaoliyatComponent} from "./hayoty-faoliyat/hayoty-faoliyat.component";
import {EditPostJashnuMarosimComponent} from "./edit-post-jashnu-marosim/edit-post-jashnu-marosim.component";
import {EditPostLiboshoComponent} from "./edit-post-libosho/edit-post-libosho.component";
import {MerosiAdabiComponent} from "./merosi-adabi/merosi-adabi.component";
import {EditPostAsbobhoiMusiqiComponent} from "./edit-post-asbobhoi-musiqi/edit-post-asbobhoi-musiqi.component";
import {EditPostTaomhoComponent} from "./edit-post-taomho/edit-post-taomho.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reg', component: RegComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'post/:id/edit', component: EditPostComponent, canActivate: [AuthGuard]},
  {path: 'post/:id/editMeros', component: EditPostMerosiAdabiComponent, canActivate: [AuthGuard]},
  {path: 'post/:id/editLibosho', component: EditPostLiboshoComponent, canActivate: [AuthGuard]},
  {path: 'post/:id/editAsbobhoiMusiqi', component: EditPostAsbobhoiMusiqiComponent, canActivate: [AuthGuard]},
  {path: 'post/:id/editTaomho', component: EditPostTaomhoComponent, canActivate: [AuthGuard]},

  {path: 'post/:id/malumot', component: MalumotiUmumiComponent},
  {path: 'post/:id/tarikh', component: TarikhComponent},
  {path: 'post/:id/tajhizot', component: TajhizotComponent},
  {path: 'post/:id/tamos', component: TamosComponent},
  {path: 'post/:id/mavqe', component: MavqeijoygirshaviComponent},
  {path: 'post/:id/hayotufaoliyat', component: HayotyFaoliyatComponent},
  {path: 'post/:id/merosiadabi', component: MerosiAdabiComponent},


  {path: 'userPosts', component: UsersPostsComponent, canActivate: [AuthGuard]},
  {path: 'meros', component: AddPostMerosiAdabiComponent, canActivate: [AuthGuard]},
  {path: 'jashn', component: AddPostJashnuMarosimComponent, canActivate: [AuthGuard]},
  {path: 'hunarho', component: CabinetComponent, canActivate: [AuthGuard]},
  {path: 'libosho', component: AddPostLiboshoiMilliComponent, canActivate: [AuthGuard]},
  {path: 'asbobho', component: AddPostAsbobhoiMusiqiComponent, canActivate: [AuthGuard]},
  {path: 'hurokho', component: AddPostTaomhoiSunnatiComponent, canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
