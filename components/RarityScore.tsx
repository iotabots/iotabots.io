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


    return (       
        <Container maxWidth='md'>
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

        </Container>
    );
};

export default RarityScoreSoonabots
