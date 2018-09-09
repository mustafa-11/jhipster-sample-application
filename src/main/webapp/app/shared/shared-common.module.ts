import { NgModule } from '@angular/core';

import { CreateDcSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CreateDcSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CreateDcSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CreateDcSharedCommonModule {}
