import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import ColorGenerator from '../components/colorGenerator';

const useStyles = makeStyles({
    root: {
      width: 500,
      margin: 'auto',
    },
    title: {
        width: 500,
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center',
    },
    subtitle: {
        width: 500,
        margin: 'auto',
        borderBottom: 'solid 1px',
        textAlign: 'center',
        paddingTop: '20px',
    },
    text: {
        width: 500,
        margin: 'auto',
        textAlign: 'center',
    },
});

export default function TopPage(){
    const classes = useStyles();
    
    return(
        <div>
            <h1 className={classes.title}>MultiColorGenerator</h1>
            <h3 className={classes.subtitle}>概要 About</h3>
            <p className={classes.text}>入力に応じてカラーコードを○個出力します．「デザインのために○色欲しいなぁ」と言うときに使ってみてください．</p>
            <h3 className={classes.subtitle}>使い方 How to Use</h3>
            <p className={classes.text}>彩度 Sと明度 V，そして欲しい色の数 Nをそれぞれ入力し，「計算する」ボタンを押します．SとVは0~100%のレンジになっています．</p>
            <ColorGenerator></ColorGenerator>
        </div>
    )
}