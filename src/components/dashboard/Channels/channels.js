import React from 'react';
import classes from './channels.module.css';
import { GetCollegesData, GetCategoriesData } from '../../../SERVICES/service';
import CCBar from './Bar/ccbar';
import CBar from './CBar/cbar';

const Channels = () => {

    const [colleges, setColleges] = React.useState([{}]);
    const [categories, setCategories] = React.useState([{}]);

    React.useEffect(() => {
        try {
            getColleges();
            getCategories();
        } catch (error) {
            console.log(error)
        }
    }, [])

    const getColleges = () => {
        GetCollegesData()
            .then((data) => {
                setColleges(data.data.colleges)
            })
    }

    const getCategories = () => {
        GetCategoriesData()
            .then(data => {
                setCategories(data.data.result)
            })
    }

    const ChannelsTable = () => {
        return (
            <CCBar data={colleges} />
        )
    }

    const CategoriesTable = () => {
        return (
            <CBar data={categories} />
        )
    }

    return (
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Messaging Channels & Categories</div>
            {
                colleges.length > 1 ? <ChannelsTable /> : null
            }

            {
                categories.length > 1 ? <CategoriesTable /> : null
            }
        </div>
    );
}

export default Channels;