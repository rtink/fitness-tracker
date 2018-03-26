import { Subject } from 'rxjs/Subject';

import { Exercise } from './exercise.model';

export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  private availableExercises: Exercise[] =[
    { id: 'crunches', name: 'Crunches', duration: 30, caloriesBurned: 10 },
    { id: 'reverse-crunch', name: 'Reverse Crunches', duration: 30, caloriesBurned: 10 },
    { id: 'bodyweight-squat', name: 'Bodyweight Squat', duration: 120, caloriesBurned: 15 },
    { id: 'glute-activation-lunges', name: 'Glute Activation Lunges', duration: 30, caloriesBurned: 10 },
    { id: 'forward-lunges', name: 'Forward Lunges', duration: 60, caloriesBurned: 10 },
    { id: 'treadmill', name: 'Tread Mill', duration: 180, caloriesBurned: 100}
  ];

  private runningExercise: Exercise;

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise});
  }
}