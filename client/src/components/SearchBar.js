import React, { useState  } from "react";
import { Button, Control, Input, Field, Icon} from "rbx";
import { useHistory  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";

export default function SearchBar() {
    const [postFilter, setPostFilter] = useState('');
    const { register, handleSubmit } = useForm();

    let history = useHistory();

    const handleChangeSearchQuery = e => {
      setPostFilter(e.target.value);
    }

    const handleClickSearch = () => {
      history.push({
        pathname: '/search',
        state: { query: postFilter}
      })
      setPostFilter('')
    }

    const handleKeyPressSearch = (event) => {
      if(event.key === 'Enter') {
        handleClickSearch();
      }
    }

    return (
        <div>
          <form onSubmit={handleSubmit(handleClickSearch)}>
            <Field kind="addons">
                <Control>
                    <Input 
                        type="text"
                        name="Search"
                        value={postFilter} 
                        onChange={handleChangeSearchQuery}
                        onKeyDown={handleKeyPressSearch} 
                        placeholder="Search posts" 
                        ref={register({required: true, minLength: 1 })}/>
                </Control>
                <Control>
                    <Input as={Button} 
                      color="primary"
                      type="submit">
                        <Icon>
                            <FontAwesomeIcon icon={faSearch} />
                        </Icon>
                    </Input>
                </Control>
            </Field>
          </form>
        </div>
    );
}