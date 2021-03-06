import {Component, OnInit} from '@angular/core';

import {TypeInfo} from '../../UltraCreation/Core';
import * as Svc from '../../providers';

@Component({selector: 'page-faq', templateUrl: 'faq.html'})
export class FaqPage implements OnInit
{
    constructor()
    {
    }

    ngOnInit()
    {
        Svc.TAssetService.LoadFaq()
            .then(values => this.Items = values)
            .catch(err => console.log(err.message));
    }

    Select(Item: IFaq)
    {
        this.Selected = Item;
    }

    Back()
    {
        if (TypeInfo.Assigned(this.Selected))
            this.Selected = undefined;
        else
            App.Nav.pop();
    }

    Items: Array<IFaq> = [];
    Selected: IFaq | undefined = undefined;
}

interface IFaq
{
    title: string;
    content: string;
}
