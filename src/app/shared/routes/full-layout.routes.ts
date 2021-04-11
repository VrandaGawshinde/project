import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('../../calendar/calendar.module').then(m => m.CalendarsModule)
  },
   {
    path: 'forms',
    loadChildren: () => import('../../forms/forms.module').then(m => m.FormModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('../../maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'tables',
    loadChildren: () => import('../../tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'datatables',
    loadChildren: () => import('../../data-tables/data-tables.module').then(m => m.DataTablesModule)
  },
  
  {
    path: 'components',
    loadChildren: () => import('../../components/ui-components.module').then(m => m.UIComponentsModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('../../pages/full-pages/full-pages.module').then(m => m.FullPagesModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('../../cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: 'colorpalettes',
    loadChildren: () => import('../../color-palette/color-palette.module').then(m => m.ColorPaletteModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../../login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('../../contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('../../booking/booking.module').then(m => m.BookingModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../../register/register.module').then(m => m.RegisterModule)
  },

];
