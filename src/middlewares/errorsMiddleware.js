import httpStatus from "http-status";

export default function errorHandlingMiddleware(error, req, res, next) {
	if (error.type === "notFound"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }

	if (error.type === "unprocessableEntity"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }

	return res.sendStatus(500);
}