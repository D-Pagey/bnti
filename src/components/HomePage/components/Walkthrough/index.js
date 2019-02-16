import React from 'react';
import calendar from './assets/calendar.png';
import loot from './assets/loot.png';
import multiChips from './assets/3chips.png';
import chip from './assets/chip.png';
import * as S from './styles';

const Walkthrough = () => {
    return (
        <S.Background>
            <S.Wrapper>
                <S.Step>
                    <S.Image src={calendar} alt="calendar" />
                    <div>
                        <S.Subtitle>Step 1</S.Subtitle>
                        <S.Text>Find your tournament, you can filter by game and date.</S.Text>
                    </div>
                </S.Step>
                <S.Step>
                    <S.Image src={chip} alt="calendar" />
                    <div>
                        <S.Subtitle>Step 2</S.Subtitle>
                        <S.Text>Place your bounty to enter your tournament</S.Text>
                    </div>
                </S.Step>
                <S.Step>
                    <S.Image src={loot} alt="calendar" width="160px" />
                    <div>
                        <S.Subtitle>Step 3</S.Subtitle>
                        <S.Text>Kill players to earn their bounties, tracked by BRB.</S.Text>
                    </div>
                </S.Step>
                <S.Step>
                    <S.Image src={multiChips} alt="calendar" />
                    <div>
                        <S.Subtitle>Step 4</S.Subtitle>
                        <S.Text>Cash in your bounties. Gloat (optional)</S.Text>
                    </div>
                </S.Step>
            </S.Wrapper>
        </S.Background>
    );
};

export default Walkthrough;
