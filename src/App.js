import GlobalStyle, { Body } from './Components/Styles/GlobalStyles';
import { ContainerStyle, Column } from './Components/Styles/container.styled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Delivery from './Components/Delivery';
import Payment from './Components/Payment';
import Finish from './Components/Finish';
import Summary from './Components/Summary';
import { DataProvider } from './DataContext';
import { useState } from 'react';
import Stepper from './Components/Stepper';

function App() {
    const [dropship, setDropship] = useState(true);
    const [shipment, setShipment] = useState('');
    return (
        <DataProvider>
            <Router>
                <GlobalStyle />
                <Body>
                    <Stepper />
                    <ContainerStyle>
                        <Column flex_grow={'8'}>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <Delivery
                                            checkedDropship={setDropship}
                                        />
                                    }
                                />
                                <Route
                                    path="/payment"
                                    element={
                                        <Payment selectShipment={setShipment} />
                                    }
                                />
                                <Route path="/finish" element={<Finish />} />
                            </Routes>
                        </Column>
                        <Column flex_grow={'2'} borderLeft>
                            <Summary
                                checkedDropship={dropship}
                                selectShipment={shipment}
                            />
                        </Column>
                    </ContainerStyle>
                </Body>
            </Router>
        </DataProvider>
    );
}

export default App;
