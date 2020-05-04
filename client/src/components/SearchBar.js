import React, { useState  } from "react";
import { Button, Control, Input, Field, Icon} from "rbx";
import { Link, useHistory  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function SearchBar() {
    const [postFilter, setPostFilter] = useState('');

    let history = useHistory();

    const handleChangeSearchQuery = e => {
      setPostFilter(e.target.value);
    }

    const handleKeyPressSearch = (event) => {
      if(event.key === 'Enter'){
        history.push({
                      pathname: '/search',
                      state: { query: postFilter}
                    })
      }
    }

    return (
        <div>
            <Field kind="addons">
                <Control>
                    <Input 
                        type="text" 
                        value={postFilter} 
                        onChange={handleChangeSearchQuery}
                        onKeyDown={handleKeyPressSearch} 
                        placeholder="Search posts" />
                </Control>
                <Control>
                    <Button color="primary" 
                      as={Link} to={{
                      pathname: '/search',
                      state: { query: postFilter}
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