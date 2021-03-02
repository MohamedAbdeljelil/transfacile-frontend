import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
    },
    {
        path: 'register-agence',
        loadChildren: () => import('./pages/agence-register/agence-register.module').then(m => m.AgenceRegisterPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'header',
        loadChildren: () => import('./pages/header/header.module').then(m => m.HeaderPageModule)
    },
  {
    path: 'trips',
    loadChildren: () => import('./pages/trips/trips.module').then( m => m.TripsPageModule)
  },
  {
    path: 'trip-details',
    loadChildren: () => import('./pages/trip-details/trip-details.module').then( m => m.TripDetailsPageModule)
  },
  {
    path: 'stops-modal',
    loadChildren: () => import('./modals/stops-modal/stops-modal.module').then( m => m.StopsModalPageModule)
  },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
  {
    path: '',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then( m => m.WelcomePagePageModule)
  },
    {
        path: 'aboutus',
        loadChildren: () => import('./pages/aboutus/aboutus.module').then(m => m.AboutusPageModule)
    },
    {
        path: 'contactus',
        loadChildren: () => import('./pages/contactus/contactus.module').then(m => m.ContactusPageModule)
    },

    {
        path: 'forum',
        loadChildren: () => import('./pages/forum/forum.module').then(m => m.ForumPageModule)
    },
    {
        path: 'about-trans-facile',
        loadChildren: () => import('./pages/about-trans-facile/about-trans-facile.module').then( m => m.AboutTransFacilePageModule)
    },
    {
        path: 'rating',
        loadChildren: () => import('./pages/rating/rating.module').then(m => m.RatingPageModule)
    },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'shared-modal',
    loadChildren: () => import('./modals/shared-modal/shared-modal.module').then( m => m.SharedModalPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
    {
        path: 'home',
        loadChildren: () => import('./admin-module/pages/home/home.module').then( m => m.HomePageModule)
    },
  {
    path: 'users',
    loadChildren: () => import('./admin-module/pages/users/users.module').then(m => m.UsersPageModule)
  },
  {
    path: 'feedbacks',
    loadChildren: () => import('./admin-module/pages/feedbacks/feedbacks.module').then( m => m.FeedbacksPageModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./admin-module/pages/reservations/reservations.module').then( m => m.ReservationsPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./admin-module/pages/statistics/statistics.module').then( m => m.StatisticsPageModule)
  },

  // {
  //   // path: 'new-user',
  //   // loadChildren: () => import('./admin-module/pages/new-user/new-user.module').then(m => m.NewUserPageModule)
  // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
