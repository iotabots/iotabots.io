import React from 'react'
import { useState } from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import {
    BaseLayout,
    Container,
    Grid,
    Section,
    SectionHeader,
    Typography
  } from '@iotabots/components'
import { useEffect } from 'react';
import {displayOptions, bodyOptions, faceOptions, backgroundOptions} from '../public/soonabotOptions.js'



/**
 * The options array should contain objects.
 * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
 */

//  const sizes = [
//                     { value: 's', name: 'Small' },
//                     { value: 'm', name: 'Medium' },
//                     { value: 'l', name: 'Large' },
//                 ]

//    const [size, setSize] = useState('s');
//      const style = {
//          fontFamily: '"Nunito Sans", sans-serif',
//          marginTop: '24px',
//          fontSize: '16px'
//      };

//      if (size === 's') {
//          style.fontSize = '16px';
//      } else if (size === 'm') {
//          style.fontSize = '32px';
//      } if (size === 'l') {
//          style.fontSize = '64px';
//      }

//  const RarityScore: React.FC = () => {
   
//      return(
//          <div>
//          <SelectSearch
//              options={sizes}
//              search
//              filterOptions={fuzzySearch}
//              emptyMessage="Not found"
//              placeholder="Select your country"
//          />
//          <h1 style={style}>Aa</h1>
//          </div>
//      )
// }


export const RarityScoreSoonabots = () => {
    const [display, setDisplay] = useState(null);
    const [body, setBody] = useState(null);
    const [face, setFace] = useState(null);
    const [background, setBackground] = useState(null);
    const [result, setResult] = useState(null);


    const resetValues = () => {
        setDisplay(null)
        setBody(null)
        setFace(null)
        setBackground(null)
        setResult(null)
    }


    const setDisplayValue = (display) => {
        setDisplay(display)
        setRarityScore()
    }
    useEffect(() => {
        setRarityScore();
      }, [display])

    const setBodyValue = (body) => {
        setBody(body)
        setRarityScore()
    }
    useEffect(() => {
        setRarityScore();
      }, [body])

    const setFaceValue = (face) => {
        setFace(face)
        setRarityScore()
    }
    useEffect(() => {
        setRarityScore();
      }, [face])

    const setBackgroundValue = (background) => {
        setBackground(background)
    }
    useEffect(() => {
        setRarityScore();
      }, [background])


    const setRarityScore = () => {

        if (body != null && display != null && face != null && background != null){
            var rarityScore = body+display+face+background
     
            setResult(rarityScore)
        }
        else
        {
            setResult
        }
    }


    return (       
        <Container maxWidth='md'>
                <Grid
                    item
                    container spacing={1}
                    justifyContent='center'
                    className="rarity-score-top-heading"
                >
                <h2 >Calculate the Rarity Score of your SOONABOT</h2>
                <div>You always wanted to know how rare your SOONABOT is? Then today is your lucky day. Here you can get the Rarity Score of your SOONABOT.
                Just enter the properties of your SOONABOT here and you will receive the Rarity Score. You can find the properties of your SOONABOT in  <b><a href="https://soonaverse.com/collection/0xeb47806ef8d4c908179bd05eeabc20bc3de8c81a">SOONAVERSE</a></b>.</div> 
                </Grid>
                 <Grid
                    item
                    container spacing={4}
                    justifyContent='center'
                    className="rarity-score-top-heading"
                >
                    <Grid justifyContent='center'>
                        <h3 className="select-search-heading">DISPLAY</h3>
                        <SelectSearch
                            onChange={display => {setDisplayValue(display)}}
                            search
                            filterOptions={fuzzySearch}
                            value={display}
                            placeholder="Set your display"
                            options={displayOptions}
                        />
                        <div className="select-search-bottom"> Rarity Score: {display}</div>
                        
                    </Grid>
                    <Grid>
                        <h3 className="select-search-heading">BODY</h3>
                        <SelectSearch
                            onChange={body => {setBodyValue(body)}}
                            search
                            filterOptions={fuzzySearch}
                            value={body}
                            placeholder="Set your body"
                            options={bodyOptions}
                        />
                        <div className="select-search-bottom">Rarity Score: {body} </div>
                    </Grid>
                    <Grid>
                        <h3 className="select-search-heading">FACE</h3>
                        <SelectSearch
                            onChange={face => {setFaceValue(face)}}
                            search
                            filterOptions={fuzzySearch}
                            value={face}
                            placeholder="Set your face"
                            options={faceOptions}
                        />
                        <div className="select-search-bottom">Rarity Score: {face} </div>
                    </Grid>
                    <Grid>
                        <h3 className="select-search-heading">BACKGROUND</h3>
                        <SelectSearch
                            onChange={background => {setBackgroundValue(background)}}
                            search
                            filterOptions={fuzzySearch}
                            value={background}
                            placeholder="Set your background"
                            options={backgroundOptions}
                        />
                        <div className="select-search-bottom">Rarity Score: {background}</div>
                    </Grid> 
                </Grid>




                <Grid  
                    container spacing={1}
                    justifyContent='center'
                >
                    <Grid className="select-search-reset-button">
                    <button type="button" onClick={resetValues} >Click here to reset all values</button>
                    </Grid>
                    
                </Grid>  



                <Grid  
                    container spacing={1}
                    justifyContent='center'
                    className="select-search-reset-button"
                >
                    <Grid>
                        <div className="rarity-score-result">YOUR OVERALL RARITY SCORE IS {result}</div>
                    </Grid>

                    <Grid >
                        <div>Fill all above values to get your Rarity Score</div>
                    </Grid>
                </Grid>

        </Container>
    );
};

export default RarityScoreSoonabots
