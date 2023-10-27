import axios from 'axios';

export default {
    data() {
        return {
            message: '',
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post(
                    `${import.meta.env.V_SERVER_API_URL}/user-feedback`,
                    this.formData
                );
                this.message = response.data.message;
                window.alert('Сообщение отправлено!');
            } catch (error) {
                console.log(error);
                this.message =
                    (error.response && error.response.data.message) ||
                    error.message ||
                    error.toString();
                window.alert(this.message);
            }
        },
    },
};
