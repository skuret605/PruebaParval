const authUserRole = (requiredRole) => {
  return (req, res, next) => {
    const userRole = req.user ? req.user.role : null;

    if (!userRole) {
      return res.status(403).json({
        message: "Acceso denegado. No se encontrol un rol de usuario.",
      });
    }

    if (userRole !== requiredRole) {
      return res.status(403).json({
        message: `Acceso denegado. Se requiere el siguiente rol: ${requiredRole}.`,
      });
    }
    next();
  };
};

export default authUserRole;
