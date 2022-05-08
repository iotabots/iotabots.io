/* eslint-disable max-len */
import React, { useEffect, useMemo ,useState  } from 'react'
import escapeRegExp from 'lodash/escapeRegExp'
import {
    Container,
    Grid,
  } from '@iotabots/components'
import Select from 'react-select'
import { backgroundOptions, bodyOptions, displayOptions, faceOptions } from '../public/soonabotOptions.js'
import { soonabotDistProps } from '../public/soonabotDistribution.js'
import Image from './ImageLoader'



// This function calculates the Rarity Score for Soonabots
// TODO: Add functionality to import a SOONABOT based on the SOONABOT number. 
// For this a table of all Soonabots is needed. 
export const RarityScoreSoonabots: React.FC = () => {
    const [displayState, setDisplay] = useState(null)
    const [bodyState, setBody] = useState(null)
    const [faceState, setFace] = useState(null)
    const [backgroundState, setBackground] = useState(null)
    const [result, setResult] = useState(null)
    const [rank, setRank] = useState(null)

    const [rarityStateDisplay, setRarityStateDisplay] = useState(null)
    const [rarityStateBody, setRarityStateBody] = useState(null)
    const [rarityStateFace, setRarityStateFace] = useState(null)
    const [rarityStateBackground, setRarityStateBackground] = useState(null)

    const [frequencyStateDisplay, setFrequencyStateDisplay] = useState(null)
    const [frequencyStateBody, setFrequencyStateBody] = useState(null)
    const [frequencyStateFace, setFrequencyStateFace] = useState(null)
    const [frequencyStateBackground, setFrequencyStateBackground] = useState(null)

    const [selectedBodyOption, setSelectedBodyOption] = useState(null)
    const [selectedFaceOption, setSelectedFaceOption] = useState(null)
    const [selectedBackgroundOption, setSelectedBackgroundOption] = useState(null)
    const [selectedDisplayOption, setSelectedDisplayOption] = useState(null)

    const [selectedSoonabotId, setSelectedSoonabotId] = useState(null)

 
    const filterConfig = {
        matchFrom: true
        ? ('start' as const)
        : ('any' as const),
    }

    const styles = {
        option: (provided, state) => ({
          ...provided,
          fontWeight: state.isSelected ? 'bold' : 'normal',
          color: 'black',
          backgroundColor: 'rgba(137, 194, 177, 0.174)',
          border:'none',
        }),
        singleValue: (provided, state) => ({
          ...provided,
          fontSize: state.selectProps.myFontSize
        })
      }

    
    const setSoonabotId = (soonabotDistPropsArray):void => {

        const e = null
        let tempBackground = null
        let tempFace = null
        let tempDisplay = null
        let tempBody = null

        tempBackground = backgroundOptions.find(tmp => tmp.label === soonabotDistPropsArray.background)
        setBackgroundValue(tempBackground)
        setSelectedBackgroundOption(tempBackground)

        tempFace = faceOptions.find(tmp => tmp.label === soonabotDistPropsArray.face)
        setFaceValue(tempFace)
        setSelectedFaceOption(tempFace)

        tempDisplay = displayOptions.find(tmp => tmp.label === soonabotDistPropsArray.display)
        setDisplayValue(tempDisplay)
        setSelectedDisplayOption(tempDisplay)

        tempBody = bodyOptions.find(tmp => tmp.label === soonabotDistPropsArray.Body)
        setBodyValue(tempBody)
        setSelectedBodyOption(tempBody)

        setSelectedSoonabotId(soonabotDistPropsArray)
        setRank(soonabotDistPropsArray.rank)
    }

    const setDisplayValue = (displayArray):void => {
        const rarityDisplay = 1/(displayArray.value/100)
        setDisplay(rarityDisplay)
        setRarityStateDisplay(displayArray.raritystatus)
        setFrequencyStateDisplay(displayArray.value) 

        setSelectedDisplayOption(displayArray)

        setRank(null)
        setSelectedSoonabotId(null)
    }
    // Use Effect is used as setState is done asynchronously
    useEffect(() => {
        setRarityScore()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [displayState])

    
    const setBodyValue = (bodyArray):void => {
        const rarityBody = 1/(bodyArray.value/100)
        setBody(rarityBody)
        setRarityStateBody(bodyArray.raritystatus)
        setFrequencyStateBody(bodyArray.value)

        setSelectedBodyOption(bodyArray)

        setRank(null)
        setSelectedSoonabotId(null)
    }
     // Use Effect is used as setState is done asynchronously
    useEffect(() => {
        setRarityScore()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [bodyState])

    const setFaceValue = (faceArray):void => {
        const rarityFace = 1/(faceArray.value/100)
        setRarityStateFace(faceArray.raritystatus)
        setFrequencyStateFace(faceArray.value)
        setFace(rarityFace)

        setSelectedFaceOption(faceArray)

        setRank(null)
        setSelectedSoonabotId(null)
    }
     // Use Effect is used as setState is done asynchronously
    useEffect(() => {
        setRarityScore()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [faceState])

    const setBackgroundValue = (backgroundArray):void => {
        const rarityBackground = 1/(backgroundArray.value/100)
        setRarityStateBackground(backgroundArray.raritystatus)
        setFrequencyStateBackground(backgroundArray.value)
        setBackground(rarityBackground)

        setSelectedBackgroundOption(backgroundArray)

        setRank(null)
        setSelectedSoonabotId(null)
    }
     // Use Effect is used as setState is done asynchronously
    useEffect(() => {
        setRarityScore()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [backgroundState])


    const setRarityScore = ():void => {

        if (bodyState != null && displayState != null && faceState != null && backgroundState != null){
            // [Individual Rarity Score for a Trait Value] = 1 / ([Number of Items with that Trait Value] / [Total Number of Items in Collection])
            // [Final Rarity Score] = SumOf([Individual Rarity Score for a Trait Value])
            // https://raritytools.medium.com/ranking-rarity-understanding-rarity-calculation-methods-86ceaeb9b98c
            const rarityScore = bodyState+displayState+faceState+backgroundState
            setResult(rarityScore)
        }
        else
        {
            setResult(null)
        }
    }
    interface State {
        readonly inputValue: number;
      }

    const getSoonabotDisPropsAsync = (inputValue: number): typeof getSoonabotDisPropsAsync => (
         soonabotDistProps.filter((i) => i.label)
         )
      

      const promiseOptions = (inputValue: number):typeof promiseOptions => new Promise<typeof soonabotDistProps>((resolve) => {
                setTimeout(() => {
            resolve(getSoonabotDisPropsAsync(inputValue))
            }, 1000)
        })

      const loadOptions = (inputValue: number, callback: (options: typeof soonabotDistProps) 
        => void):void => {
        setTimeout(() => {
          callback(getSoonabotDisPropsAsync(inputValue))
        }, 1000)
      }


      const MAX_DISPLAYED_OPTIONS = 133

      const options = []
      for (let i = 0; i < 10000; i += 1) {
        options.push({ value: i, label: `Option ${i}` })
      }

      const [inputValue, setInputValue] = useState('')

      const filteredOptions = useMemo(() => {
        if (!inputValue) {
          return soonabotDistProps
        }
    
        const matchByStart = []
        const matchByInclusion = []
    
        const regByInclusion = new RegExp(escapeRegExp(inputValue), 'i')
        const regByStart = new RegExp(`^${escapeRegExp(inputValue)}`, 'i')
    
        // for (const option of soonabotDistProps)
        soonabotDistProps.forEach(option => {
          if (regByInclusion.test(String(option.label))) {
            if (regByStart.test(String(option.label))) {
              matchByStart.push(option)
            } else {
              matchByInclusion.push(option)
            }
          }
        })
    
        return [...matchByStart, ...matchByInclusion]
      }, [inputValue])


      const slicedOptions = useMemo(
        () => filteredOptions.slice(0, MAX_DISPLAYED_OPTIONS),
        [filteredOptions]
      )


    return (       
        <Container maxWidth='md'>
                <Grid
                    item
                    container 
                    spacing={1}
                    justifyContent='center'
                    className='rarity-score-top-heading'>
                    <h2 >Calculate the Rarity Score and the Rarity Rank of your SOONABOT</h2>
                    <div>You always wanted to know how rare your SOONABOT is? Then today is your lucky day. Here you can get the Rarity Score of your SOONABOT.
                    Just enter the properties of your SOONABOT here and you will receive the Rarity Score. You can find the properties of your SOONABOT in  <b><a href='https://soonaverse.com/collection/0xeb47806ef8d4c908179bd05eeabc20bc3de8c81a'>SOONAVERSE</a></b>.</div> 
                    
                    <div>The rarity score is calculated in the following way:</div>
                    <div><i>[Rarity Score for a Trait Value] = 1 / ([Number of Items with that Trait Value] / [Total Number of Items in Collection])</i> </div>
                    <div> The total Rarity Score for an NFT is the sum of the Rarity Score of all of its trait values. This means the higher the value the better.  
                        <div>
                            Fill all underneath properties to get your Rarity Score or enter your SOONABOT ID to get additionally your Rarity Rank!
                        </div>
                    </div>
                </Grid> 
                <Grid
                    item
                    container 
                    spacing={1}
                    justifyContent='center'
                    alignItems='center'
                    className='rarity-score-top-heading'>
                         <Grid>
                        <h3 className='select-search-heading'>SOONABOT #</h3>
                        </Grid>
                        <Grid width='110px'>
                            <Select
                                onChange={soonabotDistPropsChange => {setSoonabotId(soonabotDistPropsChange)}} 
                                placeholder='ID'
                                options={slicedOptions}
                                styles={styles}  
                                onInputChange={(value) => setInputValue(value)}
                                filterOption={() => true} // disable native filter
                                value={selectedSoonabotId}
                            
                            />
                        </Grid>   
                </Grid>
                <Grid
                item
                container 
                spacing={4}
                justifyContent='center'
                className='rarity-score-top-heading'>
                    <Grid width='220px'>
                        <h3 className='select-search-heading'>BACKGROUND</h3>
                        <Select
                            onChange={background => {setBackgroundValue(background)}}
                            placeholder='Set your background'
                            options={backgroundOptions}
                            styles={styles}
                            value={selectedBackgroundOption}
                        />
                        <div className='select-search-bottom'> {rarityStateBackground !=null && rarityStateBackground}</div>
                        {frequencyStateBackground !=null && 
                            <div className='select-search-bottom'> Frequency: {frequencyStateBackground}%</div>
                        }
                        {backgroundState != null &&
                            <div className='select-search-bottom'>Rarity Score: {backgroundState != null && backgroundState.toFixed(2)}</div>
                        }
                        
                    </Grid>  
                    <Grid width='220px'>
                        <h3 className='select-search-heading'>BODY</h3>
                        <Select
                            onChange={body => {setBodyValue(body)}}
                            placeholder='Set your body'
                            options={bodyOptions}
                            styles={styles}  
                            value={selectedBodyOption}
                           
                        />
                        <div className='select-search-bottom'> {rarityStateBody !=null && rarityStateBody}</div>
                        {frequencyStateBody !=null && 
                            <div className='select-search-bottom'> Frequency: {frequencyStateBody}%</div>
                        }
                        {bodyState != null &&
                            <div className='select-search-bottom'>Rarity Score: {bodyState != null && bodyState.toFixed(2)} </div>
                        }   
                    </Grid>
                    <Grid justifyContent='center' width='220px'>
                        <h3 className='select-search-heading'>DISPLAY</h3>
                        <Select 
                            options={displayOptions}
                            onChange={display => {setDisplayValue(display)}}
                            placeholder='Set your display'
                            styles={styles}
                            value={selectedDisplayOption}
                        />
                        <div className='select-search-bottom'> {rarityStateDisplay !=null && rarityStateDisplay }</div>
                        {frequencyStateDisplay !=null && 
                            <div className='select-search-bottom'> Frequency: {frequencyStateDisplay}%</div>
                        }
                        {displayState !=null &&
                            <div className='select-search-bottom'> Rarity Score: {displayState !=null && displayState.toFixed(2)}</div>
                        }
                        
                    </Grid>
                    <Grid width='220px'>
                        <h3 className='select-search-heading'>FACE</h3>
                        <Select
                            onChange={face => {setFaceValue(face)}}
                            placeholder='Set your face'
                            options={faceOptions}
                            styles={styles}
                            value={selectedFaceOption}
                        />
                        <div className='select-search-bottom'> {rarityStateFace !=null && rarityStateFace}</div>
                        {frequencyStateFace !=null && 
                            <div className='select-search-bottom'> Frequency: {frequencyStateFace}%</div>
                        }
                        {faceState != null &&
                            <div className='select-search-bottom'>Rarity Score: {faceState != null && faceState.toFixed(2)} </div>
                        }
                        
                    </Grid>
                 
                </Grid>
                <Grid  
                    container 
                    spacing={1}
                    justifyContent='center'
                    className='select-search-reset-button'>
                        
                    { result != null &&
                        <Grid>
                            <div className='rarity-score-result'>YOUR OVERALL RARITY SCORE IS: <b>{result.toFixed(2)}</b>
                            {result != null && rank != null &&
                                <div>YOUR RARITY RANK IS: <b>{rank}</b></div>
                            }
                            </div>
                        </Grid>
                    }

                </Grid>
                <Grid  
                    container 
                    spacing={1}
                    justifyContent='center'
                    className='select-search-reset-button'>
                    <div>The highest possible Rarity Score is 3387.62. The lowest possible Rarity Score is 65.9972.</div>
                </Grid>
                <Grid  
                    container 
                    spacing={1}
                    justifyContent='center'
                    className='select-search-reset-button'>
                    <h3 className='select-search-heading'>Here is an complete overview of the percentage distribution of the individual properties:</h3>
                </Grid>
                <Grid  
                    container 
                    spacing={1}
                    justifyContent='center'
                    className='select-search-heading'>    
                    <Image 
                        imageUrl='../assets/projects/rarity_table.jpg'
                        width='400px'
                        height= '100%'
                        borderRadius='8px' 
                        border='solid white 0.001em'
                    />
                </Grid>

        </Container>
    )
}

export default RarityScoreSoonabots
