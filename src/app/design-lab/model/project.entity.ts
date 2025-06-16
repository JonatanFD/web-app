import {
    PROJECT_PRIVACY,
    GARMENT_COLOR,
    GARMENT_SIZE,
    PROJECT_GENDER,
    PROJECT_STATUS,
} from '../../const';
import { Layer } from './layer.entity';

export class Project {
    id: string;
    userId: string;
    name: string;
    previewImageUrl: string;
    price: number;
    likes: number;
    privacy: PROJECT_PRIVACY;
    status: PROJECT_STATUS;
    gender: PROJECT_GENDER;
    garmentColor: GARMENT_COLOR;
    garmentSize: GARMENT_SIZE;
    lastModified: Date;
    createdAt: Date;
    layers: Layer[];

    constructor(
        id: string,
        userId: string,
        name: string,
        previewImageUrl: string,
        price: number = 0,
        likes: number = 0,
        privacy: PROJECT_PRIVACY,
        status: PROJECT_STATUS,
        gender: PROJECT_GENDER,
        garmentColor: GARMENT_COLOR,
        garmentSize: GARMENT_SIZE,
        lastModified: Date,
        createdAt: Date,
        layers: Layer[]
    ) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.previewImageUrl = previewImageUrl;
        this.price = price;
        this.likes = likes;
        this.privacy = privacy;
        this.status = status;
        this.gender = gender;
        this.garmentColor = garmentColor;
        this.garmentSize = garmentSize;
        this.lastModified = lastModified;
        this.createdAt = createdAt;
        this.layers = layers;
    }
}
