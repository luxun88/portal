import { Router, ActivatedRoute } from "@angular/router";

export class CommonApi {
    public static parseParam(router: Router, activatedRoute: ActivatedRoute, paramName: string): any {
        let paramValue: any;
        activatedRoute.params.subscribe(params => {
            paramValue = params[paramName] || '';
        });
        return paramValue;
    }
}