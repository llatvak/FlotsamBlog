import React, { useState, useEffect  } from "react";
import { Button, Control, Input, Field, Icon} from "rbx";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function SearchBar() {
    const [categories, setCategories] = useState([]);
    const [postFilter, setPostFilter] = useState('');
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const location = useLocation();


    let postUrl = process.env.REACT_APP_POSTS_API_URL_PROD;
    let categoryUrl = process.env.REACT_APP_CATEGORIES_API_URL_PROD;

    if(process.env.NODE_ENV !== 'production') {
        postUrl = process.env.REACT_APP_POSTS_API_URL_DEVEL;
        categoryUrl = process.env.REACT_APP_CATEGORIES_API_URL_DEVEL;
    }

    useEffect(() => {
        axios
         .get(categoryUrl)
         .then(response => {
            setCategories(response.data);
         }).catch(error => {
           alert(`Backend error: ${error}`)
        })

        axios
        .get(postUrl)
        .then(response => {
           setPosts(response.data);
        }).catch(error => {
          alert(`Backend error: ${error}`)
       })

     }, [])

    const handleChangeSearchQuery = e => {
      setPostFilter(e.target.value);
      filter();
    }

    const handleClickSearch = e => {
      if(location.pathname === '/search') {
        console.log(true)
      }
    }

    const filter = () => {
      let filtered = []
      filtered = posts.filter( (post) => {
        return post.title.toLowerCase().indexOf(postFilter.toLowerCase())!==-1
      })

      setFilteredPosts(filtered);
    }

    return (
        <div>
            <Field kind="addons">
                <Control>
                    <Input 
                        type="text" 
                        value={postFilter} 
                        onChange={handleChangeSearchQuery} 
                        placeholder="Search posts" />
                </Control>
                <Control>
                    <Button color="primary" 
                      onClick={handleClickSearch} 
                      as={Link} to={{
                      pathname: '/search',
                      state: { results: filteredPosts }
                    }}>
                        <Icon>
                            <FontAwesomeIcon icon={faSearch} />
                        </Icon>
                    </Button>
                </Control>
            </Field>
        </div>
    );
}