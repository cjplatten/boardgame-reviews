import {useState} from 'react';
import { Button } from 'react-bootstrap';
import { patchVotes } from '../utils/api';

const Voter = ({voteCount, reviewId}) => {
const [voteChange, setVoteChange] = useState(0)

    function handleClick () {
        setVoteChange((currVoteChange) => currVoteChange + 1)
        patchVotes(reviewId, 1)
    }

    return (
        <div>
            <Button variant="outline-success" onClick={handleClick}>Votes: {voteCount + voteChange}</Button>
        </div>
    );
};

export default Voter;