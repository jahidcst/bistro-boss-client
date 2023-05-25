import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import CardTab from '../CardTab/CardTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {

    const categoris = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categoris.indexOf(category)
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')


    const [tabIndex, setTabIndex] = useState(initialIndex)
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Our Food</title>
            </Helmet>

            <Cover img={orderCover} title="Order FOod " description="would you like to try a dish?"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <CardTab
                        items={salad}
                    ></CardTab>
                </TabPanel>
                <TabPanel>
                    <CardTab
                        items={pizza}
                    ></CardTab>
                </TabPanel>
                <TabPanel>
                    <CardTab
                        items={soup}
                    ></CardTab>
                </TabPanel>
                <TabPanel>
                    <CardTab
                        items={dessert}
                    ></CardTab>
                </TabPanel>
                <TabPanel>
                    <CardTab
                        items={drinks}
                    ></CardTab>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;