import { getShoppingCart } from "../utilities/fakeDb";


const appliedJobsLoader = async () => {
    const loadedJobs = await fetch('/public/jobs.json');
    const jobs = await loadedJobs.json();
    const storedDb = getShoppingCart();
    const savedDb = [];
    for (const id in storedDb) {
        const addedDb = jobs.find(job => job.id === parseInt(id));
        if (addedDb) {
            const quantity = storedDb[id];
            addedDb.quantity = quantity;
            savedDb.push(addedDb);
        }
    }

    return savedDb;
}

export default appliedJobsLoader;