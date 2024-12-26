import axios from 'axios';

const API_URL = 'https://api.api-ninjas.com/v1/exercises';
const API_KEY = 'XbA0Fl4WsiurR8wUFzv2oQ==shELuTpz2sZmeQ2T';

export const fetchExercises = async (query) => {
    try {
        const response = await axios.get(API_URL, {
            headers: { 'XbA0Fl4WsiurR8wUFzv2oQ==shELuTpz2sZmeQ2T': API_KEY },
            params: query,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching exercises:', error);
        throw error;
    }
};
