import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {playerNames} from "./GridManager";

const schema = z.object({
    height: z
        .number({ invalid_type_error: "Height is required." })
        .min(1, { message: "Height must be at least 1." })
        .max(75, { message: "Height must be less or equal to 75." }),
    width: z
        .number({ invalid_type_error: "Width is required." })
        .min(1, { message: "Width must be at least 1." })
        .max(75, { message: "Width must be less or equal to 75." }),
    players: z
        .number({ invalid_type_error: "Players are required." })
        .min(2, { message: "Players must be at least 2." })
        .max(playerNames.length - 1),
    cellsToWin: z
        .number({ invalid_type_error: "Cells to win are required." })
        .min(2, { message: "Cells to win must be at least 2." })
        .max(50),

});

export type GameFormData = z.infer<typeof schema>;

type Props = {
    onSubmit: (data: GameFormData) => void;
};

export const GameForm = ({ onSubmit }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<GameFormData>({ resolver: zodResolver(schema) });
    return (
        <form
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
            })}
            className='mt-5 d-flex flex-column align-items-center'
        >
            <div className="mb-3">
                <label htmlFor="height" className="form-label">
                    Height
                </label>
                <input
                    {...register("height", { valueAsNumber: true })}
                    id="height"
                    type="number"
                    className="form-control"
                />
                {errors.height && (
                    <p className="text-danger">{errors.height.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="width" className="form-label">
                    Width
                </label>
                <input
                    {...register("width", { valueAsNumber: true })}
                    id="width"
                    type="number"
                    className="form-control"
                />
                {errors.width && (
                    <p className="text-danger">{errors.width.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="players" className="form-label">
                    Players
                </label>
                <input
                    {...register("players", { valueAsNumber: true })}
                    id="players"
                    type="number"
                    className="form-control"
                />
                {errors.players && (
                    <p className="text-danger">{errors.players.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="cellsToWin" className="form-label">
                    Cells to win
                </label>
                <input
                    {...register("cellsToWin", { valueAsNumber: true })}
                    id="cellsToWin"
                    type="number"
                    className="form-control"
                />
                {errors.cellsToWin && (
                    <p className="text-danger">{errors.cellsToWin.message}</p>
                )}
            </div>
            <button className="btn btn-primary w-25 mb-3">Play</button>
        </form>
    );
};
