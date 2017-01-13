import {inplace_files} from './inplace_files'

export namespace const_data
{
    export const DatabaseName           = 'ThunderboltDB';

    export const Anonymous =
        {Id: '{00000000-0000-4000-0000-000000000000}', Name: 'anonymous', Email: ''};

    // export const Mode =
    // [
    //     {Id: '{00000000-0000-4000-1000-000000000001}', Name: 'relax',       Icon: 0xE917, en_Name: 'Relax'},
    //     {Id: '{00000000-0000-4000-1000-000000000002}', Name: 'heal',        Icon: 0xE90B, en_Name: 'Cure'},
    //     {Id: '{00000000-0000-4000-1000-000000000003}', Name: 'train',       Icon: 0xE91E, en_Name: 'Train'},
    // ]

    export const Body =
    [
        {Id: '{00000000-0000-4000-2000-000000000001}', Name: 'upper_back',  Icon: 0xE91F, en_Name: 'Upper back'},
        {Id: '{00000000-0000-4000-2000-000000000002}', Name: 'back',        Icon: 0xE904, en_Name: 'Back'},
        {Id: '{00000000-0000-4000-2000-000000000003}', Name: 'lower_back',  Icon: 0xE915, en_Name: 'Lower back'},
        {Id: '{00000000-0000-4000-2000-000000000004}', Name: 'abdomen',     Icon: 0xE900, en_Name: 'Abdomen'},
        {Id: '{00000000-0000-4000-2000-000000000005}', Name: 'buttock',     Icon: 0xE905, en_Name: 'Buttock'},
        {Id: '{00000000-0000-4000-2000-000000000006}', Name: 'thigh',       Icon: 0xE91D, en_Name: 'Thigh'},
        {Id: '{00000000-0000-4000-2000-000000000007}', Name: 'knee',        Icon: 0xE913, en_Name: 'Knee'},
        {Id: '{00000000-0000-4000-2000-000000000008}', Name: 'calf',        Icon: 0xE906, en_Name: 'Calf'},
        {Id: '{00000000-0000-4000-2000-000000000009}', Name: 'ankle',       Icon: 0xE902, en_Name: 'Ankle'},
        {Id: '{00000000-0000-4000-2000-00000000000A}', Name: 'foot',        Icon: 0xE90F, en_Name: 'Foot'},
        {Id: '{00000000-0000-4000-2000-00000000000B}', Name: 'upper_arm',   Icon: 0xE903, en_Name: 'Upper arm'},
        {Id: '{00000000-0000-4000-2000-00000000000C}', Name: 'elbow',       Icon: 0xE90E, en_Name: 'Elbow'},
        {Id: '{00000000-0000-4000-2000-00000000000D}', Name: 'forearm',     Icon: 0xE910, en_Name: 'Forearm'},
        {Id: '{00000000-0000-4000-2000-00000000000E}', Name: 'wrist',       Icon: 0xE920, en_Name: 'Wrist'},
        {Id: '{00000000-0000-4000-2000-00000000000F}', Name: 'shoulder',    Icon: 0xE91A, en_Name: 'Shoulder'},
    ]

    export const Category =
    [
        {Id: '{00000000-0000-4000-3000-000000000001}', Icon: 0xe90b,
            Name: 'therapy',            Desc: 'therapy_desc'},
        {Id: '{00000000-0000-4000-3000-000000000002}', Icon: 0xe905,
            Name: 'fat_burning',        Desc: 'fat_burning_desc'},
        {Id: '{00000000-0000-4000-3000-000000000003}', Icon: 0xe91e,
            Name: 'muscle_training',    Desc: 'muscle_training_desc'},
        {Id: '{00000000-0000-4000-3000-000000000004}', Icon: 0xe917,
            Name: 'relax',              Desc: 'relax_desc'},
    ]

    export const ScriptFile =
    [
        {Id: '{00000000-0000-4000-4000-000000000001}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000001}', Mode_Id: null, Body_Id: null, Name: 'sore',
            content: inplace_files.file3_sore_therpy},
        {Id: '{00000000-0000-4000-4000-000000000002}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000001}', Mode_Id: null, Body_Id: null, Name: 'pain',
            content: inplace_files.file11_pain_treatment},
        {Id: '{00000000-0000-4000-4000-000000000010}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000001}', Mode_Id: null, Body_Id: null, Name: 'han',
            content: 'V1D16{R12c|F64P32C12c|R6Pc8F2C1}'},

        {Id: '{00000000-0000-4000-4100-000000000001}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000002}', Mode_Id: null, Body_Id: null, Name: 'fb_a',
            content: 'V1D16{R5a|R5F32P32C7I1b0|P64|P96|P12c|P96|P64|P32}'},
        {Id: '{00000000-0000-4000-4100-000000000002}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000002}', Mode_Id: null, Body_Id: null, Name: 'fb_b',
            content: 'V1D16{R4b|R1P96F6|F8|Fa|Fc|Fe|F10|F12|F14|F16|F18|F1a|F1c|F1e|F20|F22|F24|F26|R118F28|R2F27|F25|F23|R1F21|F1f|F1d|F1b|F19|F17|F15|F13|F11|Ff|Fd|Fb|F9|F7|R5aF6}'},
        {Id: '{00000000-0000-4000-4100-000000000003}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000002}', Mode_Id: null, Body_Id: null, Name: 'fb_c',
            content: 'V1D16{Rbb8I80|P96F20|F21|F22|F23|F24|F25|F26|F27|F28|F29|F2a|F2b|F2c|F2d|F2e|F2f|F30|F31|F32}'},
        {Id: '{00000000-0000-4000-4100-000000000004}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000002}', Mode_Id: null, Body_Id: null, Name: 'fb_d',
            content: 'V1D16{R709I14d|R1P32F36|P34|P36|P38|P3a|P3c|P3e|P40|P42|P44|P46|P48|P4a|P4c|P4e|P50|P52|P54|P56|P58|P5a|P5c|P5e|P60|P62|P64|P66|P68|P6a|P6c|P6e|P70|P72|P74|P76|P78}'},
        {Id: '{00000000-0000-4000-4100-000000000005}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000002}', Mode_Id: null, Body_Id: null, Name: 'fb_e',
            content: 'V1D16{R2ee|R1Ic8P96F4C4|R4Id0F36C5}'},
        {Id: '{00000000-0000-4000-4100-000000000006}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000002}', Mode_Id: null, Body_Id: null, Name: 'fb_f',
            content: 'V1D16{R4b0|R1I190P64F64Ca|P96F32C5|I12cF19}'},
        {Id: '{00000000-0000-4000-4100-000000000007}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000002}', Mode_Id: null, Body_Id: null, Name: 'fb_g',
            content: 'V1D16{R2b|R5P96F14I50|F15|F16|F17|R6F18|F19|F1a|F1b|F1c|F1d|F1e|F1f|F20|F21|F22|F23|F24|F25|F26|F27|F28|F29|F2a|F2b|F2c|F2d|F2e|F2f|F30|F31|F32|F33|F34|F35|F36|F35|F34|F33|F32|F31|F30|F2f|F2e|F2b|F2a|F29|F28|F27|F26|F25|F24|F23|F22|F21|F20|F1f|F1e|F1d|F1c|F1b|F1a|F19|R5F18|F17|F16|F15}'},

        {Id: '{00000000-0000-4000-4100-000000004001}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000003}', Mode_Id: null, Body_Id: null, Name: 'dumbbell',
            content: 'V1D16{|R1P96F6C5a}{R4a|R1P12cF6|F7|F8|F9|Fa|Fb|Fc|Fd|Fe|Ff|F10|F11|F12|F13|F14|F15|F16|F17|F18|F19|F1a|F1b|F1c|F1d|F1e|F1f|F20|F21|F22|F23|F24|F25|F26|F27|F28|F29|F2a|F2b|F2c|F2d|F2e|F2f|F30|F31|F32|F33|F34|F35|F36|F37|F38|F39|F3a|F3b|F3c|F3d|F3e|F3f|F40|F41|F42|F43|F44|F45|F46|F47|F48|F49|F4a|R177F4b|R2F4a|R1F45|F40|F3b|F36|F31|F2c|F27|F22|F1d|F18|F13|Fe|F9|R20F4}'},
        {Id: '{00000000-0000-4000-4100-000000004002}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000003}', Mode_Id: null, Body_Id: null, Name: 'push_ups',
            content: 'V1D16{|R1P96I3e8F32C2ee}{Rf0I500|R1P32F32|P35|P38|P3b|P3e|P41|P44|P47|P4a|P4d|P50|P53|P56|P59|P5c|P5f|P62|P65|P68|P6b|P6e|P71|P74|P77|P7a|P7d|P80|P83|P86|P89|P8c|P8f|P92|P95|P96|P93|P90|P8d|P8a|P87|P84|P81|P7e|P7b|P78|P75|P72|P6f|P6c|P69|P66|P63|P60|P5d|P5a|P57|P54|P51|P4e|P4b|P48|P45|P42|P3f|P3c|P39|P36|P33}'},
        {Id: '{00000000-0000-4000-4100-000000004003}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000003}', Mode_Id: null, Body_Id: null, Name: 'sit_ups',
            content: 'V1D16{|R1P96I3e8F32C2ee}{R200I600|R1P32F3cC3|P38|P3e|P44|P4a|P50|P56|P5c|P62|P68|P6e|P74|P7a|P80|P86|P8c|P92|P96}'},

        {Id: '{00000000-0000-4000-4000-000000000003}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000004}',  Mode_Id: null, Body_Id: null, Name: 'knock',
            content: inplace_files.file1_knock},
        {Id: '{00000000-0000-4000-4000-000000000004}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000004}', Mode_Id: null, Body_Id: null, Name: 'press',
            content: inplace_files.file4_press},
        {Id: '{00000000-0000-4000-4000-000000000005}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000004}', Mode_Id: null, Body_Id: null, Name: 'twist',
            content: inplace_files.file5_twist},
        {Id: '{00000000-0000-4000-4000-000000000006}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000004}', Mode_Id: null, Body_Id: null, Name: 'soft',
            content: inplace_files.file9_soft_knead},
        {Id: '{00000000-0000-4000-4000-000000000007}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000004}', Mode_Id: null, Body_Id: null, Name: 'joint',
            content: inplace_files.file6_joint},
        {Id: '{00000000-0000-4000-4000-000000000008}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000004}', Mode_Id: null, Body_Id: null, Name: 'shoudler',
            content: inplace_files.file7_shoulder},
        {Id: '{00000000-0000-4000-4000-000000000009}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000004}', Mode_Id: null, Body_Id: null, Name: 'upper_arm',
            content: inplace_files.file10_upper_arm},
        {Id: '{00000000-0000-4000-4000-00000000000a}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000004}', Mode_Id: null, Body_Id: null, Name: 'waist',
            content: inplace_files.file12_waist},
        {Id: '{00000000-0000-4000-4000-00000000000b}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000004}', Mode_Id: null, Body_Id: null, Name: 'leg',
            content: inplace_files.file2_leg},
        {Id: '{00000000-0000-4000-4000-00000000000c}', Author: 'UltraCreation Team',
            Category_Id: '{00000000-0000-4000-3000-000000000004}', Mode_Id: null, Body_Id: null, Name: 'soles',
            content: inplace_files.file8_soles},
        ]
}
