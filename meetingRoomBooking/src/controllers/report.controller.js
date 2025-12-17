import * as service from "../services/report.service.js";

export const roomUtilization = async (req, res) => {
  try {
    const { from, to } = req.query;

    if (!from || !to) {
      return res.status(400).json({
        error: "from and to dates are required"
      });
    }

    const report = await service.roomUtilization(from, to);
    res.json(report);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
