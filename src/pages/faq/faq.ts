import {Component, OnInit} from "@angular/core";
import {NavController} from 'ionic-angular';

import {TypeInfo} from '../../UltraCreation/Core'

import * as Svc from '../../providers';

@Component({selector: 'page-faq', templateUrl: 'faq.html'})
export class FaqPage implements OnInit
{
    constructor(public navCtrl: NavController, public app: Svc.TApplication, private Distribute: Svc.TDistributeService)
    {
    }

    ngOnInit()
    {
        this.Distribute.ReadFAQ('faq')
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
            this.Selected = null;
        else
            this.navCtrl.pop();
    }

    Items: Array<IFaq> = [];
    Selected: IFaq = null;
}

interface IFaq
{
    title: string;
    content: string;
}
