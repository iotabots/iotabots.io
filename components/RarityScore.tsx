import React from 'react'
import { useState } from 'react';
import SelectSearch, { useSelect, fuzzySearch } from 'react-select-search';
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
import Image from '../components/ImageLoader'
import Select from 'react-select';




// const colourStyles = {
//     control: (styles) => ({ 
//         ...styles, 
//         color: "white!",
//         backgroundColor: "rgba(137, 194, 177, 0.174)",
//         border:"none",
//      }),
//     option: (styles, { isDisabled }) => {
//       return {
//         ...styles,
//        // backgroundColor: isDisabled ? "white" : "white",
//         color: "black",
//         cursor: isDisabled ? "not-allowed" : "default"
//       };
//     }
//   };

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      backgroundColor: "rgba(137, 194, 177, 0.174)",
      border:"none",
      //fontSize: state.selectProps.myFontSize
    }),
    singleValue: (provided, state) => ({
      ...provided,
      //color: state.data.color,
      fontSize: state.selectProps.myFontSize
    })
  };


// This function calculates the Rarity Score for Soonabots
// TODO: Add functionality to import a SOONABOT based on the SOONABOT number. 
// For this a table of all Soonabots is needed. 
export const RarityScoreSoonabots = () => {
    const [display, setDisplay] = useState(null);
    const [body, setBody] = useState(null);
    const [face, setFace] = useState(null);
    const [background, setBackground] = useState(null);
    const [result, setResult] = useState(null);

    const [rarityStateDisplay, setRarityStateDisplay] = useState(null);
    const [rarityStateBody, setRarityStateBody] = useState(null);
    const [rarityStateFace, setRarityStateFace] = useState(null);
    const [rarityStateBackground, setRarityStateBackground] = useState(null);

    const [frequencyStateDisplay, setFrequencyStateDisplay] = useState(null);
    const [frequencyStateBody, setFrequencyStateBody] = useState(null);
    const [frequencyStateFace, setFrequencyStateFace] = useState(null);
    const [frequencyStateBackground, setFrequencyStateBackground] = useState(null);


    const resetValues = () => {
        setDisplay(null)
        setBody(null)
        setFace(null)
        setBackground(null)
        setResult(null)
        setRarityStateDisplay(null)
        setRarityStateBody(null)
        setRarityStateFace(null)
        setRarityStateBackground(null)
    }


    const setDisplayValue = (display) => {
        var rarityDisplay = 1/display.value 
        setDisplay(rarityDisplay)
        setRarityStateDisplay(display.raritystatus)
        setFrequencyStateDisplay(display.value)
        setRarityScore()
    }
    //Use Effect is used as setState is done asynchronusly
    useEffect(() => {
        setRarityScore();
      }, [display])

    const setBodyValue = (body) => {
        var rarityBody = 1/body.value
        setBody(rarityBody)
        setRarityStateBody(body.raritystatus)
        setFrequencyStateBody(body.value)
        setRarityScore()
    }
     //Use Effect is used as setState is done asynchronusly
    useEffect(() => {
        setRarityScore();
      }, [body])

    const setFaceValue = (face) => {
        var rarityFace = 1/face.value
        setRarityStateFace(face.raritystatus)
        setFrequencyStateFace(face.value)
        setFace(rarityFace)
        setRarityScore()
    }
     //Use Effect is used as setState is done asynchronusly
    useEffect(() => {
        setRarityScore();
      }, [face])

    const setBackgroundValue = (background) => {
        var rarityBackground = 1/background.value
        setRarityStateBackground(background.raritystatus)
        setFrequencyStateBackground(background.value)
        setBackground(rarityBackground)
        setRarityScore()
    }
     //Use Effect is used as setState is done asynchronusly
    useEffect(() => {
        setRarityScore();
      }, [background])


    const setRarityScore = () => {

        if (body != null && display != null && face != null && background != null){
            // [Individual Rarity Score for a Trait Value] = 1 / ([Number of Items with that Trait Value] / [Total Number of Items in Collection])
            // [Final Rarity Score] = SumOf([Individual Rarity Score for a Trait Value])
            // https://raritytools.medium.com/ranking-rarity-understanding-rarity-calculation-methods-86ceaeb9b98c
            var rarityScore = body+display+face+background
            var rarityScoreTwoDecimals = rarityScore;
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
                    className="rarity-score-top-heading">
                <h2 >Calculate the Rarity Score of your SOONABOT</h2>
                <div>You always wanted to know how rare your SOONABOT is? Then today is your lucky day. Here you can get the Rarity Score of your SOONABOT.
                Just enter the properties of your SOONABOT here and you will receive the Rarity Score. You can find the properties of your SOONABOT in  <b><a href="https://soonaverse.com/collection/0xeb47806ef8d4c908179bd05eeabc20bc3de8c81a">SOONAVERSE</a></b>.</div> 
                
                <div>The rarity score is calculated in the following way:</div>
                <div><i>[Rarity Score for a Trait Value] = 1 / ([Number of Items with that Trait Value] / [Total Number of Items in Collection])</i> </div>
                <div> The total Rarity Score for an NFT is the sum of the Rarity Score of all of its trait values. This means the higher the value the better</div>
                </Grid> 
                <Grid
                item
                container spacing={4}
                justifyContent='center'
                className="rarity-score-top-heading">
                    <Grid justifyContent='center' width="220px">
                        <h3 className="select-search-heading">DISPLAY</h3>
                        <Select 
                            options={displayOptions}
                            //filterOptions={fuzzySearch}
                            onChange={display => {setDisplayValue(display)}}
                            //value={display}
                            //closeOnSelect={true}
                            placeholder="Set your display"
                            styles={styles}
                        />
                        <div className="select-search-bottom"> {rarityStateDisplay !=null && rarityStateDisplay }</div>
                        {frequencyStateDisplay !=null && 
                            <div className="select-search-bottom"> Frequency: {frequencyStateDisplay}%</div>
                        }
                        <div className="select-search-bottom"> Rarity Score: {display !=null && display.toFixed(2)}</div>
                    </Grid>
                    <Grid width="220px">
                        <h3 className="select-search-heading">BODY</h3>
                        <Select
                            onChange={body => {setBodyValue(body)}}
                            //search={true}
                            //filterOptions={fuzzySearch}
                            //value={body}
                            placeholder="Set your body"
                            options={bodyOptions}
                            styles={styles}
                            
                        />
                        <div className="select-search-bottom"> {rarityStateBody !=null && rarityStateBody}</div>
                        {frequencyStateBody !=null && 
                            <div className="select-search-bottom"> Frequency: {frequencyStateBody}%</div>
                        }
                        <div className="select-search-bottom">Rarity Score: {body != null && body.toFixed(2)} </div>
                    </Grid>
                    <Grid width="220px">
                        <h3 className="select-search-heading">FACE</h3>
                        <Select
                            onChange={face => {setFaceValue(face)}}
                            //search={true}
                            //filterOptions={fuzzySearch}
                            //value={face}
                            placeholder="Set your face"
                            options={faceOptions}
                            styles={styles}
                        />
                        <div className="select-search-bottom"> {rarityStateFace !=null && rarityStateFace}</div>
                        {frequencyStateDisplay !=null && 
                            <div className="select-search-bottom"> Frequency: {frequencyStateDisplay}%</div>
                        }
                        <div className="select-search-bottom">Rarity Score: {face != null && face.toFixed(2)} </div>
                    </Grid>
                    <Grid width="220px">
                        <h3 className="select-search-heading">BACKGROUND</h3>
                        <Select
                            onChange={background => {setBackgroundValue(background)}}
                            //search={true}
                            //filterOptions={fuzzySearch}
                            //value={background}
                            placeholder="Set your background"
                            options={backgroundOptions}
                            styles={styles}
                        />
                        <div className="select-search-bottom"> {rarityStateBackground !=null && rarityStateBackground}</div>
                        {frequencyStateDisplay !=null && 
                            <div className="select-search-bottom"> Frequency: {frequencyStateDisplay}%</div>
                        }
                        <div className="select-search-bottom">Rarity Score: {background != null && background.toFixed(2)}</div>
                    </Grid> 
                </Grid>
                {/* <Grid  
                    container spacing={1}
                    justifyContent='center'>
                    <Grid className="select-search-reset-button">
                        <button type="button" onClick={resetValues} >Click here to reset all values</button>
                    </Grid>                
                </Grid>   */}
                <Grid  
                    container spacing={1}
                    justifyContent='center'
                    className="select-search-reset-button"
                >
                    { result != null &&
                        <Grid>
                            <div className="rarity-score-result">YOUR OVERALL RARITY SCORE IS <b>{result.toFixed(2)}</b></div>
                        </Grid>
                    }
                    { result == null &&
                        <Grid >
                            <div>Fill all above values to get your Rarity Score</div>
                        </Grid>
                    }
                </Grid>
                <Grid  
                    container spacing={1}
                    justifyContent='center'
                    className="select-search-reset-button">
                    <h3 className="select-search-heading">Here is the percentage distribution of the individual components</h3>
                </Grid>
                <Grid  
                    container spacing={1}
                    justifyContent='center'
                    className="select-search-heading">    
                    <Image 
                        imageUrl='../assets/projects/rarity_table.jpg'
                        width='400px'
                        height= '100%'
                        borderRadius='8px' 
                        border='solid white 0.001em'
                    />
                </Grid>

        </Container>
    );
};

export default RarityScoreSoonabots
