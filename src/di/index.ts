interface Repository {
    save(): void;
}

interface Service {
    save(): void;
}

class UserController {
    constructor(private service: Service) {}
    save(): void {
        this.service.save();
    }
}
class UserService implements Service {
    constructor(private repository: Repository) {}
    save(): void {
        this.repository.save();
    }
}
class UserServiceAdvanced implements Service {
    constructor(private repository: Repository) {}
    save(): void {
        this.repository.save();
    }
}
class RepositoryPostgress implements Repository {
    save(): void {
        console.log("saving using postgress");
    }
}

class MongoRepository implements Repository {
    save(): void {
        console.log("saving using mongodb");
    }
}

const mongo = new MongoRepository();
const advancedService = new UserServiceAdvanced(mongo)
const controller = new UserController(advancedService);
controller.save();
