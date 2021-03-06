import {Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {DemoRunningPage} from '../running/running';

import {StatusBar} from '../../UltraCreation/Native/StatusBar';
import {TypeInfo} from '../../UltraCreation/Core/TypeInfo';
import * as Svc from '../../providers';

const ID = {'tips1': 0, 'tips2': 1, 'tips3': 2, 'electrode': 3, 'power': 4, 'switch': 5, 'strength': 6,
    'line1': 7, 'line2': 8, 'line3': 9, 'num1': 10, 'num2': 11, 'num3': 12, 'num4': 13,
    'arrowPoint': 14, 'key': 15, 'body': 16};

@Component({selector: 'page-demo-start', templateUrl: 'start.html'})
export class StartPage implements AfterViewInit
{
    constructor()
    {
        if (App.IsIos)
            StatusBar.backgroundColorByHexString('#99d3d3d3');
    }

    ngOnInit()
    {
    }

    ngAfterViewInit()
    {
        this.InitElementStyle();
        setTimeout(() => this.AnimationFlow(), 200);
    }

    Skip()
    {
        if (App.IsIos)
            StatusBar.backgroundColorByHexString('#6590f7');
        App.Nav.pop()
    }

    DeviceSelection(Peripheral: Svc.TConnectablePeripheral | undefined)
    {
        this.DeviceScanning = false;
        if (! TypeInfo.Assigned(Peripheral))
            return;

        let Shell = Peripheral.Shell;
        App.DisableHardwareBackButton();
        App.ShowLoading()
            .then(() => Shell.Connect())
            .then(() => App.Nav.push(DemoRunningPage, {Shell: Shell}))
            .catch(err =>
            {
                App.EnableHardwareBackButton();
                App.HideLoading()
                    .then(() => App.ShowError(err));
            });
    }

    Go()
    {
        console.log('go');
        App.ShowLoading()
            .then(() => this.DeviceScanning = true);
    }

    InitElementStyle()
    {
        let ele = this.animatedef.nativeElement,
            width = window.innerWidth,
            height = width * 1.5,
            colorYellow = '#fce76c', colorLight = '#333', colorLightOpacity = 'rgba(0,0,0,.3)';
            ele.children[ID.tips1].setAttribute('style',  'width: ' + width * 0.14 + 'px; height: ' + width * 0.14 + 'px; left: ' + width * 0.39 + 'px; top:' + height * 0.15 + 'px');
            ele.children[ID.tips2].setAttribute('style',  'width: ' + width * 0.05 + 'px; height: ' + width * 0.05 + 'px; left: ' + width * 0.83 + 'px; top:' + height * 0.455 + 'px');
            ele.children[ID.tips3].setAttribute('style',  'width: ' + width * 0.14 + 'px; height: ' + width * 0.14 + 'px; left: ' + width * 0.62 + 'px; top:' + height * 0.68 + 'px');
            ele.children[ID.electrode].setAttribute('style',  'font-size: 1.6rem; color: ' + colorYellow + ';left: ' + width * 0.62 + 'px; top: ' + height * 0.16 + 'px');
            ele.children[ID.power].setAttribute('style',  'transform:translateY(0); transform-origin: center bottom; font-size: 1.2rem; line-height:1.4rem; color: ' + colorYellow + '; left: ' + width * 0.85 + 'px; top: ' + height * 0.35 + 'px;');
            ele.children[ID.switch].setAttribute('style',  'font-size: 1.6rem; color: ' + colorYellow + ';left: ' + width * 0.18 + 'px; top: ' + height * 0.5 + 'px');
            ele.children[ID.strength].setAttribute('style',  'font-size: 1.6rem; color: ' + colorYellow + ';left: ' + width * 0.18 + 'px; top: ' + height * 0.8 + 'px');
            ele.children[ID.line1].setAttribute('style',  'z-index:0; transform-origin: left center;transform:scale(.5); font-size: 50vw; color: ' + colorYellow + ';left: ' + width * 0.5 + 'px; top: ' + -height * 0.015 + 'px');
            ele.children[ID.line2].setAttribute('style',  'z-index:0; transform-origin: right bottom; font-size: 50vw; color: ' + colorYellow + ';left: ' + width * 0.12 + 'px; top: ' + height * 0.384 + 'px');
            ele.children[ID.line3].setAttribute('style',  'z-index:0; transform-origin: right center; font-size: ' + width * 0.68 + 'px; color: ' + colorYellow + ';left: ' + width * 0.12 + 'px; top: ' + height * 0.50 + 'px');
            ele.children[ID.num1].setAttribute('style', 'font-size: 2.8rem; color: ' + colorYellow + ';left: ' + width * 0.88 + 'px; top: ' + height * 0.06 + 'px');
            ele.children[ID.num2].setAttribute('style', 'font-size: 2.8rem; color: ' + colorYellow + ';left: ' + width * 0.88 + 'px; top: ' + height * 0.5 + 'px');
            ele.children[ID.num3].setAttribute('style', 'font-size: 2.8rem; color: ' + colorYellow + ';left: ' + -width * 0.04 + 'px; top: ' + height * 0.49 + 'px');
            ele.children[ID.num4].setAttribute('style', 'font-size: 2.8rem; color: ' + colorYellow + ';left: ' + -width * 0.04 + 'px; top: ' + height * 0.78 + 'px');
            ele.children[ID.arrowPoint].setAttribute('style', 'transform: rotate(-170deg); font-size: 1rem; color: ' + colorLightOpacity + ';left: ' + width * 0.74 + 'px; top: ' + height * 0.6 + 'px');
            ele.children[ID.key].setAttribute('style', 'font-size: ' + width * 0.5 + 'px; color: ' + colorLight + '; left: ' + width * 0.36 + 'px; top: ' + height * 0.5 + 'px');
            ele.children[ID.body].setAttribute('style', 'font-size:' + width * 0.67 + 'px; color: ' + colorLight + '; top:'  + -height * 0.07 + 'px; ');

        this.ready.nativeElement.setAttribute('style', 'z-index: 0; position:absolute; left:0; right:0; bottom:20px; opacity: 0;');
    }

    AnimationFlow()
    {
        let ele = this.animatedef.nativeElement;
        let width = window.innerWidth, height = width * 1.5;

        let Animation = () =>
        {
            console.log('TypeMode:' + this.TypeMode);

            if (this.TypeMode > 9) return;

            switch (this.TypeMode)
            {
                case 0:
                    setTimeout(() => {
                        ele.children[ID.body].style.opacity = 1;
                        ele.children[ID.body].style.left = width * 0.05 + 'px';
                        ele.children[ID.body].style.top = height * 0.03 + 'px';
                        Animation();
                    }, 150);
                    break;

                case 1:
                    setTimeout(() => {
                        this.ready.nativeElement.style.opacity = 1;
                        this.ready.nativeElement.style.bottom = '30px';
                        ele.children[ID.line1].style.opacity = 1;
                        ele.children[ID.line1].style.transform = 'scale(1)';
                        Animation();
                    }, 500);

                    setTimeout(() => {
                        ele.children[ID.electrode].style.opacity = 1;
                        ele.children[ID.electrode].style.top = height * 0.12 + 'px';
                        Animation();
                    }, 700);
                    break;

                case 2:
                    setTimeout(() => {
                        ele.children[ID.num1].style.opacity = 1;
                        ele.children[ID.num1].style.top = height * 0.134 + 'px';
                        Animation();
                    }, 700);
                    break;

                case 3:
                    setTimeout(() => {
                        ele.children[ID.power].style.opacity = 1;
                        ele.children[ID.power].style.transform = 'translateY(0)';
                        Animation();
                    }, 700);
                    break;

                case 4:
                    setTimeout(() => {
                        ele.children[ID.num2].style.opacity = 1;
                        Animation();
                    }, 700);
                    break;

                case 5:
                    setTimeout(() => {
                        ele.children[ID.arrowPoint].style.opacity = 1;
                        ele.children[ID.arrowPoint].style.left = width * 0.64 + 'px';
                        ele.children[ID.arrowPoint].style.fontSize = '6rem';
                        ele.children[ID.key].style.opacity = 1;
                        ele.children[ID.key].style.left = width * 0.3 + 'px';
                        ele.children[ID.key].style.top = height * 0.5 + 'px';
                        Animation();
                    }, 700);
                    break;

                case 6:
                    setTimeout(() => {
                        ele.children[ID.line2].style.opacity = 1;
                        ele.children[ID.line2].style.transform = 'scale(1)';

                        ele.children[ID.switch].style.opacity = 1;
                        ele.children[ID.switch].style.top = height * 0.48 + 'px';
                        Animation();
                    }, 700);
                    break;

                case 7:
                    setTimeout(() => {
                        ele.children[ID.num3].style.opacity = 1;
                        ele.children[ID.num3].style.left = width * 0.06 + 'px';
                        Animation();
                    }, 700);
                    break;

                case 8:
                     setTimeout(() => {
                        ele.children[ID.line3].style.opacity = 1;

                        ele.children[ID.num4].style.opacity = 1;
                        ele.children[ID.num4].style.left = width * 0.06 + 'px';
                        Animation();
                    }, 700);
                    break;

                case 9:
                    setTimeout(() => {
                        ele.children[ID.strength].style.opacity = 1;
                        ele.children[ID.strength].style.top = height * 0.82 + 'px';
                        Animation();
                    }, 700);
                break;
            }

            this.TypeMode ++;
        };
        Animation();
    }

    App = window.App;

    TypeMode: number = 0;
    @ViewChild('ready') ready: ElementRef;
    @ViewChild('animatedef') animatedef: ElementRef;

    IsShowingDeviceList: boolean = false;
    DeviceScanning = false;
}
