import type IWorld from "../world.spec";
import type {TObjectProto} from "../_.spec";
import type {ISerDeOperations} from "../serde";
import type {ISyncPoint} from "../scheduler/pipeline/sync-point.spec";
import type {IScheduler} from "../scheduler/scheduler.spec";
import type {IIStateProto} from "../state.spec";

export interface IComponentRegistrationOptions {
    serDe: ISerDeOperations
}

export interface IWorldBuilder {
    /**
     * Build the execution unit
     */
    build(): IWorld

    /**
     * Alias for [withComponent]{@link IWorldBuilder#withComponent}
     * @param Component
     * @param options
     */
    c(Component: TObjectProto, options?: IComponentRegistrationOptions): IWorldBuilder

    /**
     * Alias for [withComponent]{@link IWorldBuilder#withComponent}
     * @param Component
     * @param options
     */
    component(Component: TObjectProto, options?: IComponentRegistrationOptions): IWorldBuilder

    /**
     * Alias for [withComponent]{@link IWorldBuilder#withComponent}
     * @param Components
     */
    components(...Components: TObjectProto[]): IWorldBuilder

    /**
     * Alias for [withName]{@link IWorldBuilder#withName}
     * @param name
     */
    name(name: string): IWorldBuilder

    /**
     * Transform the root sync point
     * @param updater
     */
    updateRootSyncPoint(updater: (root: ISyncPoint) => void): IWorldBuilder

    /**
     * Register a component in the world
     * @param Component
     * @param options
     */
    withComponent(Component: TObjectProto, options?: IComponentRegistrationOptions): IWorldBuilder

    /**
     * Register several components with default options in the world
     * @param Components
     */
    withComponents(...Components: TObjectProto[]): IWorldBuilder

    /**
     * Add a default scheduler
     * @param scheduler
     */
    withDefaultScheduler(scheduler: IScheduler): IWorldBuilder

    /**
     * Give the world a name
     * @param name
     */
    withName(name: string): IWorldBuilder

    /**
     * Create and add a default schedule
     * @param planner
     */
    withDefaultScheduling(planner: (root: ISyncPoint) => void): IWorldBuilder

    /**
     * Add a per-state custom scheduler
     * @param state
     * @param scheduler
     */
    withStateScheduler(state: IIStateProto, scheduler: IScheduler): IWorldBuilder

    /**
     * Create and add a per-state schedule
     * @param state
     * @param planner
     */
    withStateScheduling(state: IIStateProto, planner: (root: ISyncPoint) => void): IWorldBuilder
}
