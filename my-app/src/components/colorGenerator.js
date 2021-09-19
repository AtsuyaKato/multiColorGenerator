import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//import Grid from '@material-ui/core/Grid';

import ParameterSliter from './parameterSlider';
import ParameterInput from './parameterInput';

const useStyles = makeStyles({
    root: {
      width: 250,
      margin: 'auto',
      marginTop: 30,
    },
});

export default function ColorGenerator(props) {
    const classes = useStyles();

    const [S, setS] = React.useState(20);
    const [V, setV] = React.useState(100);
    const [N, setN] = React.useState(2);

    const [colorList, setColorList] = React.useState([]);

    function calculateColor() {
        setColorList([]);
        for(let i=0; i< N; i++){
            let H = parseInt(360/N * i,10);
            setColorList(colorList => colorList.concat(toRGB(H,S,V)));
        }
    };

    function toRGB(H,S,V) {
        S *= 2.55;
        V *= 2.55;
        let R,G,B;
        let max = V;
        let min = max - ((S/255)*max);
        //var max = Math.max(H,S,V);
        let k = parseInt(H/60,10);
        switch (k) {
            case 0:
                R = max;
                G = (H/60) * (max - min) +min;
                B = min;
                break;
            case 1:
                R = ((120 - H) / 60) * (max - min) + min;
                G = max;
                B = min;
                break;
            case 2:
                R = min;
                G = max;
                B = ((H - 120)/60) * (max - min) + min;
                break;
            case 3:
                R = min;
                G = ((240 - H)/60) * (max - min) + min;
                B = max;
                break;
            case 4:
                R = ((H - 240)/60) * (max - min) + min;
                G = min;
                B = max;
                break;
            case 5:
                R = max;
                G = min;
                B = ((360 - H)/60) * (max - min) + min;
                break;
            default:
                break;
        }
        R = parseInt(R,10); G = parseInt(G,10); B = parseInt(B,10);
        let rgb = [R,G,B];
        //return(R.toString(16));
        //return("R =" + R + ", G = "+ G + ", B = " + B);
        return(R.toString(16).padStart(2,'0') + G.toString(16).padStart(2,'0') + B.toString(16).padStart(2,'0'));
    }

    const GenerateColorList = () => {
        let c;
        //let colorli;
        /*for(let i=0; i < colorList.length; i++){
            c = "color:" + colorList[i];
            colorli += <li style={{c}}>{colorList[i]}</li>;
        }*/
        let colorli = colorList.map((color) => <li>{color}</li>);
        return(
            <ul>{colorli}</ul>
        );
    };

    return(
        <div  className={classes.root}>
            <ParameterSliter valueName="S" value={S} onChange={setS}></ParameterSliter>
            <ParameterSliter valueName="V" value={V} onChange={setV}></ParameterSliter>
            <ParameterInput valueName="N" value={N} onChange={setN}></ParameterInput>
            <Button variant="contained" onClick={calculateColor}>計算する</Button>
            <p>計算結果 Results</p>
            <GenerateColorList></GenerateColorList>
        </div>
    )
}
