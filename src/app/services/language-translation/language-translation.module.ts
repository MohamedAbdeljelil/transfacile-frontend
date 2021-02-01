/**
 * This module is used to language translations.
 * The translations are saved in a json file in /src/app/assets/i18n directory
 * Docs: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
 */
import { NgModule, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import ngx-translate and the http loader
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// ngx-translate - required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@Directive()
@NgModule({
  declarations: [],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ],
})
export class LanguageTranslationModule {
  constructor(
    private translate: TranslateService,
  ) {
    // Gets Default language from browser if available, otherwise set English ad default
    this.translate.addLangs(['en','fr']);
    this.translate.setDefaultLang('fr');

/*var id=this.tokenStorage.getId();
this.service.GetUserById(id).subscribe(p=>{
  console.log(p)
if(p.language==true)
  this.translate.use('en');
  else   this.translate.use('fr');


},(error)=>console.log(error))*/

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  ngOnInit() {}
}
