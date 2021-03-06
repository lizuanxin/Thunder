import {TypeInfo} from '../../UltraCreation/Core/TypeInfo';
import {TAbstractShell} from '../../UltraCreation/Native/Abstract.Shell';
import * as USB from '../../UltraCreation/Native/USB';

import {TConnectablePeripheral, PeripheralFactory} from '../shared_service';
import {TShell} from '../loki/shell';

const USB_VENDOR = 0x10C4;
const USB_PRODUCT = 0x0003;
const USB_MTU = 64;
const USB_MIN_WRITE_INTERVAL = 10;

/* TTensPeripheral */

export class TTensPeripheral extends TConnectablePeripheral
{
    /// @override
    static ClassName = 'Tens';
    /// @override
    static ProductName = 'UltraCreation Tens';
    /// @override
    static AdName = ['uctenqt3', 'thunderbolt', 'uctenqt1', 'miniq'];

    /// @override
    static LocalPNP(): TTensPeripheral | undefined
    {
        if (USB.OTG.IsAttached)
        {
            let Peri = PeripheralFactory.Get('USB', TTensPeripheral) as TTensPeripheral;

            Peri.ConnectId = 'USB';
            Peri.Name += ' USB';
            Peri.Status.IsPNP = true;
            return Peri;
        }
        else
            return undefined;
    }

    /// @override
    get Icon_Id(): number
    {
        return 0xE932;
    }

    get Shell(): TAbstractShell
    {
        if (TypeInfo.Assigned(this.ConnectId))
            return TShell.Get(this.ConnectId);
        else
            return TShell.Get(this.Id as string);
    }
}

/* TBluetens */

export class TBluetens extends TConnectablePeripheral
{
    /// @override
    static ClassName = 'Bluetens';
    /// @override
    static ProductName = 'Bluetens';
    /// @override
    static AdName = ['bluetensx', 'bluetensq', 'bluetens'];
    /// @override
    static AdNameExpr?: RegExp = /.blt/g;

    /// @override
    get Icon_Id(): number
    {
        return 0xE932;
    }

    get Shell(): TAbstractShell
    {
        if (TypeInfo.Assigned(this.ConnectId))
            return TShell.Get(this.ConnectId);
        else
            return TShell.Get(this.Id as string);
    }
}

setTimeout(() => USB.OTG.Start(USB_VENDOR, USB_PRODUCT, USB_MTU, USB_MIN_WRITE_INTERVAL)
    .catch(err => console.log(err.message)), 1000);

PeripheralFactory.Register(TTensPeripheral);
PeripheralFactory.Register(TBluetens);
