export function getImagePath(model) {
    return model.image_id
        ? `${import.meta.env.V_SERVER_API_URL}/images/` + model.image_id
        : '';
}
