import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import particlesOptions from './components/Particles/Particles-config';
import './App.css';
import 'tachyons';
import { Component } from 'react';

const app = new Clarifai.App({
    apiKey: 'b8b129eadcc843eebd2d6ba78c826603',
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageUrl: '',
            box: {},
        };
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace =
            data.outputs[0].data.regions[0].region_info.bounding_box;
        console.log(data);
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        console.log(width, height);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - clarifaiFace.right_col * width,
            bottomRow: height - clarifaiFace.bottom_row * height,
        };
    };

    displayFaceBox = (box) => {
        this.setState({ box: box });
        console.log(box);
    };

    onInputChange = (event) => {
        this.setState({ input: event.target.value });
    };

    onButtonSubmit = () => {
        this.setState({ imageUrl: this.state.input });
        app.models
            .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then((response) => this.calculateFaceLocation(response))
            .then((response) => this.displayFaceBox(response))
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <div className='App'>
                <Particles className='particles' params={particlesOptions} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition
                    box={this.state.box}
                    imageUrl={this.state.imageUrl}
                />
            </div>
        );
    }
}

export default App;

// const particlesOptions = {
//     particles: {
//         number: {
//             value: 100,
//             density: {
//                 enable: true,
//             },
//         },
//         size: {
//             value: 3,
//         },
//     },
//     interactivity: {
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: 'repulse',
//             },
//         },
//     },
// };
