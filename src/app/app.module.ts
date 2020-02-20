import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentLoaderModule } from '@ngneat/content-loader';

import { MatInputModule, MatSelectModule, MatCheckboxModule } from '@angular/material';

import { AboutComponent } from './views/about/about.component';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './views/articles/articles.component';
import { BurgerComponent } from './components/atoms/burger/burger.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { ButtonFacebookComponent } from './components/atoms/button-facebook/button-facebook.component';
import { ButtonLinkComponent } from './components/atoms/button-link/button-link.component';
import { CardComponent } from './components/molecules/card/card.component';
import { ComingSoonPageComponent } from './components/atoms/coming-soon-page/coming-soon-page.component';
import { ContactComponent } from './views/contact/contact.component';
import { ContentBlockComponent } from './components/organisms/content-block/content-block.component';
// tslint:disable-next-line: max-line-length
import { ContentLoaderTeaserArticleComponent } from './components/atoms/content-loader-teaser-article/content-loader-teaser-article.component';
import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component';
import { EventComponent } from './views/event/event.component';
import { EventOverviewComponent } from './views/event-overview/event-overview.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { GraphQLModule } from './graphql.module';
import { HeaderComponent } from './components/organisms/header/header.component';
import { HeadingComponent } from './components/atoms/heading/heading.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { IconComponent } from './components/atoms/icon/icon.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { ImpressionComponent } from './views/impression/impression.component';
import { ImpressionOverviewComponent } from './views/impression-overview/impression-overview.component';
import { InputComponent } from './components/atoms/input/input.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { LinkListComponent } from './components/molecules/link-list/link-list.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { NewsletterComponent } from './components/molecules/newsletter/newsletter.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { PictureComponent } from './components/atoms/picture/picture.component';
import { RheinklangRoutingModule as AppRoutingModule } from './app-routing.module';
import { SeoManagerComponent } from './components/helper/seo-manager/seo-manager.component';
import { SpinnerComponent } from './components/atoms/spinner/spinner.component';
import { SponsorsOverviewComponent } from './views/sponsors-overview/sponsors-overview.component';
import { TagComponent } from './components/atoms/tag/tag.component';
import { TagListComponent } from './components/molecules/tag-list/tag-list.component';
import { TeaserComponent } from './components/molecules/teaser/teaser.component';
import { TeaserEventComponent } from './components/molecules/teaser-event/teaser-event.component';
import { TeaserSponsorComponent } from './components/molecules/teaser-sponsor/teaser-sponsor.component';
import { ScrollAnchorDirective } from './directives/scroll-anchor.directive';
import { RichtextComponent } from './components/atoms/richtext/richtext.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { SafeHtml } from './pipes/safe-html';
import { StaticMapComponent } from './components/molecules/map/static-map.component';
import { MapComponent } from './components/molecules/map/map.component';
import { GlobalErrorHandler } from './handler/GlobalErrorHandler';
import { LogService } from './services/log.service';
import { environment } from '../environments/environment';
import { RemoteLogService } from './services/remote-log.service';
import { SelectComponent } from './components/atoms/select/select.component';
import { CheckboxComponent } from './components/atoms/checkbox/checkbox.component';
import { FormGroupComponent } from './components/molecules/form-group/form-group.component';
import { AccordionPanelComponent } from './components/atoms/accordion-panel/accordion-panel.component';
import { AccordionComponent } from './components/molecules/accordion/accordion.component';
import { GuestAppearanceFormComponent } from './forms/guest-appearance-form/guest-appearance-form.component';
import { FormComponent } from './components/organisms/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupplierFormComponent } from './forms/supplier-form/supplier-form.component';
import { TeamFormComponent } from './forms/team-form/team-form.component';
import { PrivacyBannerComponent } from './components/molecules/privacy-banner/privacy-banner.component';
import { PrivacyComponent } from './views/privacy/privacy.component';

@NgModule({
	declarations: [
		SafeHtml,
		AppComponent,
		DefaultLayoutComponent,
		AboutComponent,
		ArticlesComponent,
		BurgerComponent,
		ButtonComponent,
		ButtonFacebookComponent,
		ButtonLinkComponent,
		CardComponent,
		ComingSoonPageComponent,
		ContactComponent,
		ContentBlockComponent,
		ContentLoaderTeaserArticleComponent,
		EventComponent,
		EventOverviewComponent,
		FooterComponent,
		HeaderComponent,
		HeadingComponent,
		HomeComponent,
		IconComponent,
		ImageComponent,
		ImpressionComponent,
		ImpressionOverviewComponent,
		InputComponent,
		LinkComponent,
		LinkListComponent,
		LogoComponent,
		NewsletterComponent,
		NotFoundComponent,
		PictureComponent,
		RichtextComponent,
		ScrollAnchorDirective,
		SeoManagerComponent,
		SpinnerComponent,
		SponsorsOverviewComponent,
		TagComponent,
		TagListComponent,
		TeaserComponent,
		TeaserEventComponent,
		TeaserSponsorComponent,
		TooltipDirective,
		StaticMapComponent,
		MapComponent,
		SelectComponent,
		CheckboxComponent,
		FormGroupComponent,
		AccordionPanelComponent,
		AccordionComponent,
		GuestAppearanceFormComponent,
		FormComponent,
		SupplierFormComponent,
		TeamFormComponent,
		PrivacyBannerComponent,
		PrivacyComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		GraphQLModule,
		// FormsModule,
		ReactiveFormsModule,
		ContentLoaderModule,
		BrowserAnimationsModule,
		// Material
		MatInputModule,
		MatSelectModule,
		MatCheckboxModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [
		{
			provide: ErrorHandler,
			useClass: GlobalErrorHandler
		},
		{
			provide: LogService,
			useClass: environment.production ? RemoteLogService : LogService
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
