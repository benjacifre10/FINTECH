import homeRoutes from './home.routes';
import weatherRoutes from './weather.routes';

export default class IndexRoutes {
    index: any;

    constructor(index: any) {
        this.index = index;
        this.setRoutes();
    }

    setRoutes(): void {
        this.index.use('/', homeRoutes);
        this.index.use('/v1', weatherRoutes);
    }
}