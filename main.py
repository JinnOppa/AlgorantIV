from netCDF4 import Dataset
import numpy as np
import os
import sys

#from bkenergy.mkbathy_2020.ibathy2020 import Gridinfo, Sbathy

sys.path.append(r'/Users/uranus/workarea/bke/seabottom4.1')

from bkenergy.ibathy import Gridinfo, Sbathy
from bkenergy.icke import Sbenergy
from bkenergy.iwke import Wbenergy
from bkenergy.bchem import Sbchem

