import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header.js';
import { useSearchMovie } from '../hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { findUserByUserNameThunk } from '../services/users-thunks.js';
import UserList from '../components/UserList.js';

const SearchPage = () => {
  const [criteria, setCriteria] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const [isSearch, setIsSearch] = useState(false);
  const { data: result } = useSearchMovie(criteria);
  const { currentUser } = useSelector((state) => state.authData);
  const { users } = useSelector((state) => state.usersData);
  const dispatch = useDispatch();

  const handleCriteria = (event) => {
    setSearchParams({ criteria: event.target.value });
    setCriteria(event.target.value);
  };

  const handleSearchBtn = (event) => {
    event.preventDefault();
    dispatch(findUserByUserNameThunk(criteria));
    console.log(users);
    setIsSearch(true);
  };

  const getYear = (release_date) => release_date.split('-')[0] || '';

  return (
    <>
      <Header />
      <main className='mx-auto my-0' style={{ maxWidth: 1280 }}>
        <div className='py-6 px-0 mt-16'>
          <h1 className='mx-auto text-center mb-3 font-bold text-5xl'>
            Movie Search
          </h1>
          <Form className='d-flex mx-auto mb-5 text-center form-outline w-6/12'>
            <Form.Control
              className='me-2 rounded-pill'
              type='text'
              size='lg'
              value={criteria}
              onChange={handleCriteria}
              placeholder='Write here to search'
            />
            <Button
              className='rounded-pill'
              variant='outline-primary'
              onClick={handleSearchBtn}
            >
              Search
            </Button>
          </Form>
          {isSearch
            ? result?.data.results.map((item) => (
                <a
                  key={item.id}
                  href={`/details/${item.id}`}
                  className='no-underline'
                >
                  <ul className='search-result-item border-b-2 pb-2'>
                    <Container>
                      <Row>
                        <Col sm={4} className='w-auto h-36'>
                          <img
                            className='w-full h-full object-cover rounded'
                            src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                            alt={item.title}
                          />
                        </Col>
                        <Col sm={8}>
                          <h1 className='text-3xl font-bold text-black'>{`${
                            item.title
                          } (${getYear(item.release_date)})`}</h1>
                          <p className='text-xl text-black'>{item.overview}</p>
                        </Col>
                      </Row>
                    </Container>
                  </ul>
                </a>
              ))
            : null}
          {isSearch && (
            <h1 className='text-black font-bold text-3xl text-center'>
              User Research Result
            </h1>
          )}
          {isSearch
            ? users.map((user) => (
                <div className='mb-3'>
                  <div className='Container w-8/12 mx-auto'>
                    <div className='mb-2'>
                      <a
                        className='no-underline text-black text-2xl text-center mx-auto w-full'
                        href={`profile/${user._id}`}
                      >
                        {user.username}
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </main>
    </>
  );
};

export default SearchPage;
