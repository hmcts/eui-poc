import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SimpleDatePageComponent } from "@nfdiv/features";

export const routes: Routes = [
  { path: "", component: SimpleDatePageComponent },
  {
    path: "appointment",
    loadChildren: () =>
      import("../../../../libs/nfdiv-features/src/lib/lib.routes").then(
        (mod) => mod.nfdivFeaturesRoutes
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
