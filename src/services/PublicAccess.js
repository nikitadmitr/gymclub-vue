import createAxios from './axiosConfig';

const publicApi = createAxios('/public');

class PublicAccess {
    getWorkoutContent() {
        return publicApi.get('workouts');
    }

    getTrainersContent() {
        return publicApi.get('trainers');
    }
}

export default new PublicAccess();
