import React, { useState, useEffect } from 'react';
import Link from '../components/Link/Link';
import List from '../components/List/List';
import "./Profile.css"


interface Data {
    html_url: string,
    repos_url: string,
    name: string,
    company: string,
    location: string,
    email: string,
    bio: string,
    avatar_url: string
}

const defaultData = {
    html_url: "",
    repos_url: "",
    name: "",
    company: "",
    location: "",
    email: "",
    bio: "",
    avatar_url: ""
}

interface Repository {
    name:string,
    html_url :string
}


type Item = {
    label: string;
    value: JSX.Element | string;
}

const Profile = () => {

    const [data, setData] = useState<Data>(defaultData);
    const [repositories, setRepositories] = useState<Array<Repository>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const profile = await fetch('https://api.github.com/users/hatikuay');
            const profileJSON = await profile.json();

            if (profileJSON) {
                const myRepositories = await fetch(profileJSON.repos_url);
                const repositoriesJSON = await myRepositories.json();

                setData(profileJSON);
                setRepositories(repositoriesJSON);
                setLoading(false);
            }
        } catch (error: any) {
            setError(error.message)
            setLoading(false);
        }
    }
    useEffect(() => { fetchData() }, [])

    if (loading || error) {
        return <div>{loading ? 'Loading...' : error}</div>;
    }

    const items: Array<Item> = [
        {
            label: 'html_url',
            value: <Link url={data.html_url} title='Github URL' />,
        },
        { label: 'repos_url', value: data.repos_url },
        { label: 'name', value: data.name },
        { label: 'company', value: data.company },
        { label: 'location', value: data.location },
        { label: 'email', value: data.email },
        { label: 'bio', value: data.bio },
    ];

    const projects: Array<Item> = repositories.map(repository => ({
        label: repository.name,
        value: <Link url={repository.html_url} title='Github URL' />,
    }));

    return (
        <div className='ProfileWrapper'>
            <img className='Avatar' src={data.avatar_url} alt='avatar' />
            <List title='Profile' items={items} />
            <List title='Projects' items={projects} />
        </div>
    );
}

export default Profile;